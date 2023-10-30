---
title: Gallery
displayed_sidebar: main
---

import { ImageGrid, Grid } from "@site/src/components/mdx"

# Gallery

<!-- [Sizzle Reel draft.mp4](Gallery%20e5522cb5bfc94082adac41f1ab17a673/Sizzle_Reel_draft.mp4) -->

export const galleryImages = [
    { src: '/1.png'},
    { src: '/2.png'},
    { src: '/3.png'},
    { src: '/4.png'},
    { src: '/6.png'},
    { src: '/7.png'},
    { src: '/8.png'},
    { src: '/9.png'},
    { src: '/10.png'},
    { src: '/11.png'},
    { src: '/12.png'},
    { src: '/13.png'},
    { src: '/14.png'},
    { src: '/15.png'},
    { src: '/16.png'},
    { src: '/17.png'},
    { src: '/18.png'},
    { src: '/19.png'},
    { src: '/20.png'},
    { src: '/21.png'},
    { src: '/22.png'},
    { src: '/23.png'},
    { src: '/24.png'},
    { src: '/25.png'},
    { src: '/26.png'},
    { src: '/27.png'},
    { src: '/28.png'},
]

<ImageGrid>
    {galleryImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>
