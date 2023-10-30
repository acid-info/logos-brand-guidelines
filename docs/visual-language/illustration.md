---
title: Illustration
sidebar_position: 5
displayed_sidebar: main
---

import { ImageGrid, Grid } from "@site/src/components/mdx"

export const protocolPromotion = [
    {src: "/Conceptual-illustration-1.png"},
    {src: "/Conceptual-illustration-2.png"},
    {src: "/Conceptual-illustration-3.png"},
    {src: "/Conceptual-illustration-4.png"},
]

export const conceptualImages = [
    {src: "/Conceptual-illustration-5.png"},
    {src: "/Conceptual-illustration-6.png"},
    {src: "/Conceptual-illustration-7.png"},
    {src: "/Conceptual-illustration-8.png"},
    {src: "/Conceptual-illustration-9.png"},
    {src: "/Conceptual-illustration-10.png"},
    {src: "/Conceptual-illustration-11.png"},
    {src: "/Conceptual-illustration-12.png"},
    {src: "/Conceptual-illustration-13.png"},
    {src: "/Conceptual-illustration-14.png"},
    {src: "/Conceptual-illustration-15.png"},
    {src: "/Conceptual-illustration-16.png"},
    {src: "/Conceptual-illustration-17.png"},
    {src: "/Conceptual-illustration-18.png"},
    {src: "/Conceptual-illustration-19.png"},
    {src: "/Conceptual-illustration-20.png"},
    {src: "/Conceptual-illustration-21.png"},
    {src: "/Conceptual-illustration-22.png"},
    {src: "/Conceptual-illustration-23.png"},
    {src: "/Conceptual-illustration-24.png"},
    {src: "/Conceptual-illustration-25.png"},
]

export const abstractImages = [
    {src: "/Abstract-1.png"},
    {src: "/Abstract-2.png"},
    {src: "/Abstract-3.png"},
    {src: "/Abstract-6.png"},
    {src: "/Abstract-7.png"},
    {src: "/Abstract-8.png"},
    {src: "/Abstract-9.png"},
    {src: "/Abstract-10.png"},
    {src: "/Abstract-11.png"},
    {src: "/Abstract-12.png"},
    {src: "/Abstract-13.png"},
    {src: "/Abstract-14.png"},
    {src: "/Abstract-15.png"},
    {src: "/Abstract-16.png"},
    {src: "/Abstract-17.png"},
    {src: "/Abstract-20.png"},
    {src: "/Abstract-21.png"},
    {src: "/Abstract-22.png"},
    {src: "/Abstract-23.png"},
    {src: "/Abstract-24.png"},
    {src: "/Abstract-25.png"},
    {src: "/Abstract-26.png"},
    {src: "/Abstract-27.png"},
    {src: "/Abstract-28.png"},
    {src: "/Abstract-29.png"},
    {src: "/Abstract-30.png"},
    {src: "/Abstract-31.png"},
    {src: "/Abstract-34.png"},
    {src: "/Abstract-35.png"},
    {src: "/Abstract-36.png"},
    {src: "/Abstract-37.png"},
    {src: "/Abstract-38.png"},
    {src: "/Abstract-39.png"},
    {src: "/Abstract-40.png"},
    {src: "/Abstract-41.png"},
    {src: "/Abstract-42.png"},
    {src: "/Abstract-42-1.png"},
    {src: "/Abstract-44.png"},
    {src: "/Abstract-45.png"},
    {src: "/Abstract-48.png"},
    {src: "/Abstract-49.png"},
]

These 3D rendered animations are used to promote Nomos, Waku, Nimbus, and Codex. Each Protocol has its own and can be used in static or animated form. In some cases these statues appear to be previously broken and repaired in the style of Japanese Kintsugi (golden repair). This is a metaphor for the vision of Logos to rebuild the currently broken modern society with the pieces of enlightenment and renaissance ideas.

Codex - data backbone, the archive, Atlas holding up the world

Nomos - David, ancient symbol of freedom and egalitarian values

Nimbus - Aphrodite with halo, lightness, symbol of love, attraction

Waku - Prometheus, delivering transformative technology

<ImageGrid>
    {protocolPromotion.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>

## Conceptual

The selected illustration style is detailed, and symmetrical to suggest the subliminal or occult. The artwork can be simplified but should be strong conceptually relating back to one of the concepts.

Need to come up with a plan/process for creating/buying/commissioning/using this type of illustration. Could be applicable to Network State Press articles and social promo stuff.

<ImageGrid>
    {conceptualImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>

## Abstract

Texture can be preferable giving a layering or aging effect to the work suggesting time or craft. Many digital illustrations can feel rushed or flat without a subtle texture effect depending upon the execution.

HIO uses these abstracts for the Flash Hash episode covers.

<ImageGrid>
    {abstractImages.map((img, index) => (
        <Grid.Item key={index}>
            <img src={img.src} />
        </Grid.Item>
    ))}
</ImageGrid>
