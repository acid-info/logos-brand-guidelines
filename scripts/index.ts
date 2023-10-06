import * as fs from 'fs'
import * as fsp from 'fs/promises'
import path from 'path'
import { DATA_DIR } from './config'

const main = async () => {
  console.time()

  if (!fs.existsSync(DATA_DIR)) {
    await fsp.mkdir(DATA_DIR)
  }

  const [, , ...filenames] = process.argv

  for (const filename of filenames) {
    console.time(filename)
    const { run } = await import(path.join(process.cwd(), filename))
    await run()

    console.timeEnd(filename)
  }

  console.timeEnd()
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
