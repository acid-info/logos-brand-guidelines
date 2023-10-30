---
title: Photography
sidebar_position: 4
displayed_sidebar: main
---

import { ImageGrid, Grid } from "@site/src/components/mdx"

export const portraits = [
    {src: "/Logos-Photography-01.png"},
    {src: "/Logos-Photography-02.png"},
    {src: "/Logos-Photography-03.png"},
    {src: "/HIO-Photography-01.png"},
    {src: "/HIO-Photography-02.png"},
    {src: "/HIO-Photography-03.png"},
    {src: "/HIO-Photography-04.png"},
]

export const activismImages = [
    {src: "/Activism-1.png"},
    {src: "/Activism-2.png"},
    {src: "/Activism-3.png"},
    {src: "/Activism-4.png"},
    {src: "/Activism-5.png"},
    {src: "/Activism-6.png"},
    {src: "/Activism-7.png"},
    {src: "/Activism-8.png"},
    {src: "/Activism-9.png"},
    {src: "/Activism-10.png"},
    {src: "/Activism-11.png"},
    {src: "/Activism-12.png"},
    {src: "/Activism-13.png"},
    {src: "/Activism-14.png"},
]

export const conceptualImages = [
    {src: "/Conceptual-1.png"},
    {src: "/Conceptual-2.png"},
    {src: "/Conceptual-3.png"},
    {src: "/Conceptual-4.png"},
    {src: "/Conceptual-5.png"},
    {src: "/Conceptual-6.png"},
    {src: "/Conceptual-7.png"},
    {src: "/Conceptual-8.png"},
    {src: "/Conceptual-9.png"},
    {src: "/Conceptual-10.png"},
    {src: "/Conceptual-11.png"},
    {src: "/Conceptual-12.png"},
    {src: "/Conceptual-13.png"},
    {src: "/Conceptual-14.png"},
    {src: "/Conceptual-15.png"},
    {src: "/Conceptual-16.png"},
    {src: "/Conceptual-17.png"},
    {src: "/Conceptual-18.png"},
    {src: "/Conceptual-19.png"},
    {src: "/Conceptual-20.png"},
    {src: "/Conceptual-21.png"},
    {src: "/Conceptual-22.png"},
    {src: "/Conceptual-23.png"},
]

We have a unique photography style for each of the following categories; Portraits, Activism, and Conceptual.

## Portraits

This style is primarily used for podcast promotion.

Black and white, dramatic lighting where possible.

Guest consent when possible.

Displays a decent amount of head and shoulders crop.

<ImageGrid>
    {portraits.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>

## Activism

This style is primarily used for Network State Press articles and presentations.

Black and white.

Includes journalistic style and stock photography.

Protests, demonstrations.

Free is good, licensed can be used (need to work out details).

<ImageGrid>
    {activismImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>

## Conceptual

This style is primarily used for Network State Press articles and presentations.

Includes journalistic style and stock photography.

Relates to core Logos concepts; human rights, privacy, civil liberties, etc.

Free is good, licensed can be used (need to work out details).

<ImageGrid>
    {conceptualImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>
