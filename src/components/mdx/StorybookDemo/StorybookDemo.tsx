import { Dropdown } from '@acid-info/lsd-react'
import { useColorMode } from '@docusaurus/theme-common'
import clsx from 'clsx'
import React, { useMemo, useRef, useState } from 'react'
import styles from './StoryBookDemo.module.scss'

type GlobalType = {
  name: string
  description: string
  defaultValue: string
  toolbar: {
    icon: string
    items: { title: string; value: string }[]
  }
}

type ComponentProperty = {
  name: string
  type: {
    name: 'enum'
    value: string[]
  }
  defaultValue?: string
}

export type StorybookDemoProps = {
  name: string
  storyId: string
  storybookUrl: string
  globalTypes: Record<string, GlobalType>
  componentProperties: ComponentProperty[]
}

export const StorybookDemo: React.FC<StorybookDemoProps> = ({
  name,
  storyId,
  storybookUrl,
  globalTypes,
  componentProperties = [],
}) => {
  const colorMode = useColorMode()

  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [globalProps, setGlobalProps] = useState(
    Object.fromEntries(
      Object.entries(globalTypes).map(([name, prop]) => [
        name,
        name === 'themeColor'
          ? colorMode.colorMode.slice(0, 1).toUpperCase() +
            colorMode.colorMode.slice(1)
          : prop.defaultValue,
      ]),
    ),
  )

  const [props, setProps] = useState(
    Object.fromEntries(
      componentProperties.map(prop => [prop.name, prop.defaultValue]),
    ),
  )

  const embedUrl = useMemo(() => {
    const el = iframeRef.current

    const url = el?.src
      ? new URL(el.src)
      : new URL('/iframe.html', storybookUrl as string)

    url.searchParams.set('id', storyId)
    url.searchParams.set('viewMode', 'story')
    url.searchParams.set(
      'globals',
      Object.entries(globalProps)
        .map(([name, value]) => `${name}:${value}`)
        .join(';') + ';',
    )

    url.searchParams.set(
      'args',
      Object.entries(props)
        .map(([name, value]) => `${name}:${value}`)
        .join(';') + ';',
    )

    url.searchParams.set('full', '1')
    url.searchParams.set('shortcuts', 'false')
    url.searchParams.set('singleStory', 'true')

    return url.toString()
  }, [storyId, globalProps, props])

  return (
    <div className={clsx(styles.root, styles[globalProps.themeColor])}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0 8px',
        }}
      >
        {Object.entries(globalTypes).map(([name, prop]) => (
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
        {componentProperties.map(prop => (
          <Dropdown
            key={prop.name}
            value={props[prop.name]}
            onChange={value =>
              setProps(state => ({ ...state, [prop.name]: value as string }))
            }
            options={prop.type.value.map(i => ({
              name: i,
              value: i,
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
            height: 400,
          }}
        />
      </div>
    </div>
  )
}
