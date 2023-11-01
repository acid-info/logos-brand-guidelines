import React from 'react'
import styles from './PresentationKit.module.scss'
import { Typography } from '@acid-info/lsd-react'
import Link from '@docusaurus/Link'

export type PresentationKitProps = {
  imgSrc: string
  title: string
  subtitle: string
  href: string
  icon: React.ReactNode
}

export const PresentationKit: React.FC<PresentationKitProps> = ({
  imgSrc,
  title,
  subtitle,
  href,
  icon,
}) => {
  return (
    <div className={styles.root}>
      <img src={imgSrc} />

      <Link className={styles.link} href={href} target="_blank">
        {icon}
        <div className={styles.textContainer}>
          <Typography variant="body1" component="div">
            {title}
          </Typography>
          <Typography
            variant="body3"
            component="div"
            className={styles.subtitle}
          >
            {subtitle}
          </Typography>
        </div>
      </Link>
    </div>
  )
}
