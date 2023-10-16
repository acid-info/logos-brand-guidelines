import * as fs from 'fs'
import * as fsp from 'fs/promises'
import fetch from 'node-fetch'
import * as path from 'path'
import { URL } from 'url'
import { DATA_DIR } from './config'

const EXCLUDE_COMPONENTS = [
  'BreadcrumbItem',
  'CardBody',
  'CardHeader',
  'CollapseHeader',
  'DropdownItem',
  'ModalBody',
  'ModalFooter',
  'TabItem',
  'TableItem',
  'TableRow',
  'Calendar',
]

const COMPONENT_PROPS = ['size', 'variant']

const STORYBOOK_URL = process.env.STORYBOOK_URL
const DOCS_DIR = path.join(DATA_DIR, '../docs')
const LSD_DOCS_DIR = path.join(DOCS_DIR, './resources-and-tools/lsd')

const generateDocs = async (metadata: any) => {
  const componentsDir = path.join(DATA_DIR, './components')

  if (fs.existsSync(componentsDir))
    await fsp.rm(componentsDir, { recursive: true })
  await fsp.mkdir(componentsDir)

  if (fs.existsSync(path.join(LSD_DOCS_DIR, 'components')))
    await fsp.rm(path.join(LSD_DOCS_DIR, 'components'), { recursive: true })

  await fsp.mkdir(LSD_DOCS_DIR, {
    recursive: true,
  })

  const globalTypes = JSON.stringify(metadata.globalTypes || {}, null, 2)

  const components = metadata.components.filter(
    component => !EXCLUDE_COMPONENTS.includes(component.name),
  )

  for (const component of components) {
    const story =
      component.stories.find(s => s.name === 'Root') || component.stories[0]
    const storyId = story.id

    // const args = COMPONENT_PROPS.map(prop => [prop, component.argTypes[prop]])
    //   .filter(prop => !!prop[1])
    //   .map(prop => ({ name: prop[0], ...prop[1] }))
    //   .map(prop => ({
    //     ...prop,
    //     defaultValue:
    //       prop.defaultValue &&
    //       (prop.type.value || []).includes(prop.defaultValue)
    //         ? prop.defaultValue
    //         : prop.type.value?.[0],
    //   }))

    let doc = ''
    doc += `import { StorybookDemo } from '@site/src/components/mdx/StorybookDemo';\n\n`

    doc += `---\ntitle: ${component.name}\n---\n\n`
    doc += `# \n\n`
    doc += `<StorybookDemo name="${component.name}" storybookUrl="${STORYBOOK_URL}" storyId="${storyId}" globalTypes={{}} componentProperties={[]} />\n`

    await fsp.writeFile(path.join(componentsDir, `${component.name}.mdx`), doc)
  }

  await fsp.rename(componentsDir, path.join(LSD_DOCS_DIR, 'components'))
}

export const run = async () => {
  const metadataUrl = new URL('/_metadata.json', STORYBOOK_URL)
  const response = await (await fetch(metadataUrl.toString())).json()

  await fsp.writeFile(
    path.join(__dirname, '../data', 'storybook.metadata.json'),
    JSON.stringify(response),
  )

  await generateDocs(response)
}
