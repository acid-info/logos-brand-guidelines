import * as fsp from 'fs/promises'
import fetch from 'node-fetch'
import * as path from 'path'
import { URL } from 'url'

const STORYBOOK_URL = process.env.STORYBOOK_URL

export const run = async () => {
  const metadataUrl = new URL('/_metadata.json', STORYBOOK_URL)
  const response = await (await fetch(metadataUrl.toString())).json()

  await fsp.writeFile(
    path.join(__dirname, '../data', 'storybook.metadata.json'),
    JSON.stringify(response),
  )
}
