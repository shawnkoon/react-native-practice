# ReactNativeBasics

## Application to practice basics of ReactNative.

Source: https://facebook.github.io/react-native/docs/tutorial.html

# Flex tips

You will normally use a combination of `flexDirection`, `alignItems`, and `justifyContent` to achieve the right layout.

```
flexDirection:
  - Adding flexDirection to a component's style determines the primary axis of its layout. Should the children be organized horizontally (row) or vertically (column)? The default is column.

shawnkoon ver:
  - Which direction it's *child* components will be displayed. Growth direction.
```

```
justifyContent:
  - Adding justifyContent to a component's style determines the distribution of children along the primary axis. Should children be distributed at the start, the center, the end, or spaced evenly? Available options are `flex-start`, `center`, `flex-end`, `space-around`, and `space-between`.

shawnkoon ver:
  - Where it's *child* components are going to be focused.
```

```
alignItems:
  - Adding alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa). Should children be aligned at the start, the center, the end, or stretched to fill? Available options are flex-start, center, flex-end, and stretch.

shawnkoon ver:
  - Opposite of parent's growth direction. But determins where *child* components are going to be focused.
```

More details: https://facebook.github.io/react-native/docs/layout-props.html
