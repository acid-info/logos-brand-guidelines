import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React, { useMemo, useRef, useState } from 'react'
import { Dropdown } from '@acid-info/lsd-react'
import styles from './StoryBookDemo.module.scss'
import clsx from 'clsx'

type GlobalType = {
  name: string
  description: string
  defaultValue: string
  toolbar: {
    icon: string
    items: { title: string; value: string }[]
  }
}
type StorybookMetadata = {
  components: any[]
  globalTypes: Record<string, GlobalType>
}

const metadata: StorybookMetadata = require('@site/data/storybook.metadata.json')
const GLOBAL_PROPS = metadata.globalTypes || {}

export type StorybookDemoProps = {
  name: string
}

export const StorybookDemo: React.FC<StorybookDemoProps> = ({ name }) => {
  const {
    siteConfig: {
      customFields: { storybookUrl = 'http://localhost:6006' },
    },
  } = useDocusaurusContext()
  const colorMode = useColorMode()

  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [globalProps, setGlobalProps] = useState(
    Object.fromEntries(
      Object.entries(GLOBAL_PROPS).map(([name, prop]) => [
        name,
        name === 'themeColor'
          ? colorMode.colorMode.slice(0, 1).toUpperCase() +
            colorMode.colorMode.slice(1)
          : prop.defaultValue,
      ]),
    ),
  )

  const details = useMemo(() => {
    const component = metadata.components.find(comp => comp.name === name)
    const story =
      component.stories.find(story => story.name === 'Root') ||
      component.stories[0]
    const url = new URL(`?path=${story.id}`, storybookUrl as string)

    return {
      story,
      component,
      url: url.toString(),
    }
  }, [name])

  const embedUrl = useMemo(() => {
    const el = iframeRef.current

    const url = el?.src
      ? new URL(el.src)
      : new URL('/iframe.html', storybookUrl as string)

    url.searchParams.set('id', details.story.id)
    url.searchParams.set('viewMode', 'story')
    url.searchParams.set(
      'globals',
      Object.entries(globalProps)
        .map(([name, value]) => `${name}:${value}`)
        .join(';') + ';',
    )

    url.searchParams.set('full', '1')
    url.searchParams.set('shortcuts', 'false')
    url.searchParams.set('singleStory', 'true')

    return url.toString()
  }, [details, globalProps])

  return (
    <div className={clsx(styles.root, styles[globalProps.themeColor])}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0 8px',
        }}
      >
        {Object.entries(GLOBAL_PROPS).map(([name, prop]) => (
          <Dropdown
            key={name}
            value={globalProps[name]}
            onChange={value =>
              setGlobalProps(state => ({ ...state, [name]: value as string }))
            }
            options={prop.toolbar.items.map(i => ({
              name: i.title,
              value: i.value,
            }))}
            triggerLabel={prop.name}
            label={prop.name}
          />
        ))}
      </div>
      <div
        style={{
          width: '100%',
          marginTop: '8px',
        }}
      >
        <iframe
          ref={iframeRef}
          src={embedUrl}
          style={{
            width: '100%',
          }}
        />
      </div>
    </div>
  )
}
