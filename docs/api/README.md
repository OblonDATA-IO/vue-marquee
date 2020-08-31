---
sidebar: auto
---

# API

## Props

### `is-playing`

A two-way binding prop which sets and changes with the playing state of the marquee. 

- **Type**: `Boolean`
- **Accepted**: `true`, `false`

### `direction`

Set the scrolling direction of the marquee. 

- **Type**: `String`
- **Default**: `ltr`
- **Accepted**: `ltr`, `rtl`, `ttb`, `btt`

### `duration-per-slide`

Set the time for an element of the marquee to travel by the width of that element. 

- **Type**: `Number`, `String`
- **Default**: `2000`
- **Accepted**: Any integer and string that can be parsed as integer