import React, { useEffect, useState } from 'react'
import {
  Grid,
  GridProps,
} from '@acid-info/logos-docusaurus-theme/lib/client/components/mdx'
import styles from './ImageGrid.module.scss'
import clsx from 'clsx'
import { IconButton, CloseIcon } from '@acid-info/lsd-react'

type ImageType = {
  src: string
  alt?: string
}

type MasonryModeProps = {
  setSelectedImage: (image: ImageType | null) => void
  firstColumnSize: number
  imageArray: ImageType[]
}

// Masonry mode only has 2 columns with 1 item each.
const MasonryMode: React.FC<MasonryModeProps> = ({
  setSelectedImage,
  firstColumnSize,
  imageArray,
}) => {
  const firstColumnImages = imageArray.slice(0, firstColumnSize)
  const secondColumnImages = imageArray.slice(firstColumnSize)

  return (
    <>
      <Grid.Item>
        {firstColumnImages.map((image, index) => (
          <div key={index} className={styles.thumbnailImageContainer}>
            <img
              key={index}
              src={image.src}
              alt={image.alt || ''}
              onClick={() => setSelectedImage(image)}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </Grid.Item>
      <Grid.Item>
        {secondColumnImages.map((image, index) => (
          <div key={index} className={styles.thumbnailImageContainer}>
            <img
              key={index}
              src={image.src}
              alt={image.alt || ''}
              onClick={() => setSelectedImage(image)}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </Grid.Item>
    </>
  )
}

export type ImageGridProps = GridProps & {
  imageArray: ImageType[]
  mode?: 'masonry' | 'regular' | 'square-thumbnails'
  firstColumnSize?: number
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  mode = 'regular',
  imageArray,
  firstColumnSize = 0, // default value
  ...props
}) => {
  const [selectedImage, setSelectedImage] = useState<null | ImageType>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Grid
        md={{ cols: mode === 'masonry' ? 2 : 3, gap: '16px' }}
        xs={{ cols: 2, gap: '16px' }}
        className={clsx(
          styles.imageGrid,
          mode === 'masonry' && styles.masonry,
          mode === 'regular' && styles.regular,
          mode === 'square-thumbnails' && styles.squareThumbnails,
        )}
        {...props}
      >
        {mode === 'masonry' ? (
          <MasonryMode
            setSelectedImage={setSelectedImage}
            firstColumnSize={firstColumnSize}
            imageArray={imageArray}
          />
        ) : (
          imageArray.map((image, index) => (
            <Grid.Item key={index} className={styles.thumbnailImageContainer}>
              <img
                src={image.src}
                alt={image.alt || ''}
                onClick={() => setSelectedImage(image)}
                className={styles.thumbnailImage}
              />
            </Grid.Item>
          ))
        )}
      </Grid>

      {selectedImage && (
        <div className={styles.overlay}>
          <div className={styles.expandedImageContainer}>
            <IconButton
              size="small"
              onClick={() => setSelectedImage(null)}
              className={styles.closeButton}
            >
              <CloseIcon color="primary" />
            </IconButton>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || ''}
              className={styles.expandedImage}
            />
          </div>
        </div>
      )}
    </>
  )
}
