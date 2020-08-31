---
sidebar: auto
---

# Examples

## Mechanism

Vue Marquee makes use of a visual illusion that achieves the scrolling effect. 
The inner element moves along the x-axis (for horizontal marquees) or the y-axis 
(for vertical marquees) and get restarted once it reaches second half. 

It involves no DOM manipulation. CSS transform composition layer is engaged 
efficient GPU rendering. 

<client-only>
    <marquee-explanation></marquee-explanation>
</client-only>

## Plaintext left-to-right

<client-only>
    <marquee-demo-plaintext></marquee-demo-plaintext>
</client-only>

::: details View Code
<<< @/docs/.vuepress/components/MarqueeDemoPlaintext.vue
:::

## Plaintext right-to-left

<client-only>
    <marquee-demo-plaintext-r-t-l></marquee-demo-plaintext-r-t-l>
</client-only>

::: details View Code
<<< @/docs/.vuepress/components/MarqueeDemoPlaintextRTL.vue
:::

## Plaintext bottom-to-top

<client-only>
    <marquee-demo-plaintext-b-t-t></marquee-demo-plaintext-b-t-t>
</client-only>

::: details View Code
<<< @/docs/.vuepress/components/MarqueeDemoPlaintextBTT.vue
:::

## Images left-to-right

<client-only>
    <marquee-demo-images></marquee-demo-images>
</client-only>

::: details View Code
<<< @/docs/.vuepress/components/MarqueeDemoImages.vue
:::

## Images top-to-bottom

<client-only>
    <marquee-demo-vertical></marquee-demo-vertical>
</client-only>

::: details View Code
<<< @/docs/.vuepress/components/MarqueeDemoVertical.vue
:::

## Asynchronous Images

<client-only>
    <marquee-demo-async></marquee-demo-async>
</client-only>

::: details View Code
<<< @/docs/.vuepress/components/MarqueeDemoAsync.vue
:::