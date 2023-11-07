import React from 'react'
import styles from './CardWithIcon.module.scss'
import clsx from 'clsx'
import { Typography } from '@acid-info/lsd-react'
import Link from '@docusaurus/Link'
import { NewPageIcon } from '@acid-info/lsd-react'

export type CardWithIconProps = Omit<
  React.HTMLProps<HTMLDivElement>,
  'title' | 'color'
> & {
  title: React.ReactNode
  href: string
  subtitle?: React.ReactNode
  icon?: React.ReactNode
}

export const CardWithIcon: React.FC<CardWithIconProps> = ({
  title,
  href,
  subtitle,
  icon,
  ...props
}) => {
  return (
    <Link href={href} className={styles.linkContainer}>
      <div {...props} className={clsx(props.className, styles.root)}>
        <div className={styles.icons}>
          {!!icon && <div className={styles.icon}>{icon}</div>}
          <NewPageIcon />
        </div>
        <Typography className={styles.title} variant="body1" component="div">
          {title}
        </Typography>

        {!!subtitle && (
          <Typography
            className={styles.subtitle}
            variant="label2"
            component="div"
          >
            {subtitle}
          </Typography>
        )}
      </div>
    </Link>
  )
}
