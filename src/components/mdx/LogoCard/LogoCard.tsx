import React from 'react'
import styles from './LogoCard.module.scss'
import clsx from 'clsx'
import { Typography } from '@acid-info/lsd-react'
import Link from '@docusaurus/Link'
import { DownloadIcon } from '../Icons/DownloadIcon'

export type LogoCardProps = Omit<
  React.HTMLProps<HTMLDivElement>,
  'title' | 'color'
> & {
  title: React.ReactNode
  logoHref: string
  pngHref: string
  svgHref: string
}

export const LogoCard: React.FC<LogoCardProps> = ({
  title,
  logoHref,
  pngHref,
  svgHref,
  ...props
}) => {
  return (
    <div {...props} className={clsx(props.className, styles.root)}>
      <div className={styles.mainContent}>
        <Typography variant="body2" component="div">
          {title}
        </Typography>

        <div className={styles.imgContainer}>
          <img src={logoHref} />
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link className={styles.link} href={pngHref} download>
          <Typography variant="body3" component="div">
            PNG
          </Typography>
          <DownloadIcon />
        </Link>
        <Link className={styles.link} href={svgHref} download>
          <Typography variant="body3" component="div">
            SVG
          </Typography>
          <DownloadIcon />
        </Link>
      </div>
    </div>
  )
}
