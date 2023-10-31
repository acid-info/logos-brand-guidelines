import React from 'react'
import {
  Grid,
  GridProps,
} from '@acid-info/logos-docusaurus-theme/lib/client/components/mdx'
import styles from './ImageGrid.module.scss'

export type ImageGridProps = GridProps & {
  children: React.ReactNode
}

export const ImageGrid: React.FC<ImageGridProps> = ({ children, ...props }) => {
  const handleImageClick = event => {
    // The following code clicks on the lightbox expand button when an image is clicked.
    if (event.target.tagName === 'IMG') {
      const siblings = Array.from(event.target.parentElement.children)

      siblings.forEach(sibling => {
        if ((sibling as any).tagName === 'BUTTON') {
          ;(sibling as any).click() // programmatically click the lightbox expand button.
        }
      })
    }
  }

  return (
    <Grid
      md={{ cols: 3, gap: '12px' }}
      className={styles.imageGrid}
      onClick={handleImageClick}
      {...props}
    >
      {children}
    </Grid>
  )
}
