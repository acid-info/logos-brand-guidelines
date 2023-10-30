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

This style, primarily used for podcast promotion, incorporates black-and-white visuals with dramatic lighting when feasible. It typically frames subjects with a good amount of head and shoulders. Try to ensure guest consent when possible.

<ImageGrid>
    {portraits.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>

## Activism

This style is predominantly employed for Network State Press articles and presentations, featuring a black-and-white color scheme. It integrates a journalistic approach with both stock photography and real-life imagery from protests and demonstrations. While a preference is given to free resources, licensed content can also be considered.

<ImageGrid>
    {activismImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>

## Conceptual

This style is primarily utilized for Network State Press articles and presentations, encompassing a journalistic approach along with the inclusion of stock photography. It is designed to align with fundamental Logos concepts, such as human rights, privacy, and civil liberties. While free resources are preferred, the use of licensed materials can be explored.

<ImageGrid>
    {conceptualImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>
