---
title: Typography
sidebar_position: 2
displayed_sidebar: main
pagination_next: 'visual-language/color'
pagination_prev: 'visual-language/logo'
---

# Typography

## Introduction

Typography is an integral part of our design process, and we believe that the message we convey should be the focus, not the typography. We prioritize accessibility, simplicity, and functionality when it comes to typography by relying on the default typefaces available on each operating system and device. 

Our typography strategy reflects the values of accessibility, simplicity, and functionality. We prioritize readability over aesthetics and utilize default typefaces to ensure consistency across platforms and devices. By drawing inspiration from underground culture and the DIY ethos, we aim to create a brand that is accessible and reproducible by anyone, anywhere, using any tool. Our approach to typography is designed to present our content in a neutral and reliable way, allowing the message to take center stage without being hindered by the typography.

## **Readability**

Good typography is essential for readability, which is why we pay close attention to contrast, tracking and leading, and dynamic text. The contrast between the text and the background is important to ensure legibility, especially for users with visual impairments. Tracking and leading are used to adjust the spacing between letters and lines of text, respectively, to make the text easier to read. The dynamic text allows users to adjust the size of the text, which is essential for accessibility.

## **Typeface**

In our branding and design endeavors, our foremost priorities when selecting typefaces are accessibility, simplicity, and functionality. By consciously opting for the default fonts present on each device and operating system, we ensure that our content remains easily readable. This choice not only sidesteps the transient allure of trendy fonts but also anchors our brand, making it easily reproducible across diverse media, no matter one's technical prowess or physical capabilities.

Given that content can span multiple languages, our recommendation leans towards the innate fonts of devices and operating systems. This provides a dual advantage: it resonates with the familiar platform conventions and assures a vast linguistic compatibility. Regardless of the platform—be it online or print—our typographic decisions are rooted in showcasing our content in a manner that's both neutral and dependable, ensuring the core message remains undiluted by typography.

Good typography, in our belief, is the art of balancing typeface, size, style, and spacing to achieve optimal readability. This is mirrored in our choices that champion content accessibility and its neutral, reliable presentation. With inspiration drawn from the rich tapestry of underground culture and the DIY spirit, our brand vision is clear: to be universally accessible, allowing for replication anywhere and by anyone, with any tool at hand.

There are two ways to choose appropriate typefaces depending on the medium:

### **Platform-specific fonts (web environments)**

We recognize that the majority of our communication channels occur within web environments, and therefore, we prioritize web fonts. By relying on the default web fonts available on each browser, we ensure that the user experience is consistent with platform conventions and that our message is accessible to as many people as possible, regardless of their technical expertise or physical abilities.

In web environments, we recommend relying on the operating system to select the appropriate typeface. This means specifying the typeface type (serif, sans-serif, or mono) in the CSS code, which will allow the browser to select the appropriate typeface based on the user's operating system and browser. This approach keeps the experience consistent with the platform conventions and ensures the widest language script support as provided by the operating systems themselves.

Below you can see an example CSS code to support the default system fonts:

```css
/**
 * System font stack for sans-serif fonts
 *
 * `-apple-system` ('San Francisco' font) – Support Safari 9+ macOS and iOS, Firefox macOS
 * `BlinkMacSystemFont` ('San Francisco' font) – Chrome 48+ macOS and iOS
 * `Segoe UI` – Windows Vista & newer
 * `Roboto` – Android 4.0+
 * `Lato` – Wikimedia Design choice, OFL licensed
 * `Helvetica, Arial, sans-serif` – (Generic) Web fallback
 * Note that standard `system-ui` value has resulted in unresolved side-effects in certain OS/language combinations as of now and is therefore not included.
 */

font-family: Serif
```

### **Platform-neutral fonts (non-web and print environments)**

In non-web and print environments, we suggest using free/open-source fonts or the default fonts provided by the most common operating systems and devices. These fonts should follow the following criteria:

- Be close to the default fonts already provided on the most common operating systems and devices, to ensure consistency and ease of access.
- Have an extensive character set to support various languages and scripts.

We recommend the following free/open-source fonts that meet the above criteria:

| Font Type | Suggested Default Font Family | Suggested Free/Open-Source Font Family |
| --- | --- | --- |
| Mono | Consolas (Windows), Monaco (macOS), DejaVu Sans Mono (Linux) | Inconsolata, Fira Mono, JetBrains Mono, IBM Plex Mono |
| Serif | Georgia (Windows), Times New Roman (macOS), DejaVu Serif (Linux) | Lora |
| Sans-Serif | Segoe UI (Windows), Helvetica (macOS), DejaVu Sans (Linux) | Inter |

## UI typography specs (WIP)

### **Type Size**

We follow the W3C's Web Content Accessibility Guidelines (WCAG) recommendations on font size, which state that body copy should be at least 16px and that text should scale up to 200% without causing a loss in readability or functionality. We recommend following this guideline for all types of sizes used in our designs.

### **Line Height**

Line height is the vertical spacing between lines of text. We recommend a line height of at least 1.5 times the font size, as it enhances legibility and readability.

### **Letter Spacing**

Letter spacing is the horizontal spacing between letters. We recommend using the default letter spacing for each typeface, as it ensures consistent typography across different devices and platforms.

### **Font Weight**

Font weight refers to the thickness of the typeface. We recommend using bold or semi-bold weights for headings and subheadings to differentiate them from the body copy. For body copy, we recommend using regular or light weights to improve readability.

### **Font Style**

Font style refers to whether the typeface is italicized or in a bold style. We recommend using these styles sparingly and only for emphasis or to differentiate between headings and subheadings.

### **Text Transform**

Text transform refers to how the text is styled, such as all uppercase or lowercase. We recommend using lowercase for body copy and using uppercase for headings and subheadings sparingly.

By following these typography specifications, we ensure that our designs are consistent and legible across different devices and platforms.

## Examples

### Sans Serif

PNG

![sans.png](/sans.png)

SVG

![sans.svg](/sans.svg)

### Serif

PNG

![serif.png](/serif.png)

SVG

![serif .svg](/serif_.svg)

## Mono

PNG

![mono.png](/mono.png)

SVG

![mono.svg](/mono.svg)