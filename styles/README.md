# Styles Guide
Enforcing a master theme throughout the app allows uniform component styles and quick updates that will propogates automatically.

1. Consistent Button (etc.) styles from single definition
2. Enables dynamic Dark/Light mode switching 
3. Versatile source for web styles as well (hover color etc.)

## Shorthands
Shorthands.tsx is where you can define your own style abbreviation maps
```typescript
    fDir: 'flexDirection',
    fd: 'flexDirection',
    ai: 'alignItems',
    w: 'width',
    wd: 'width'
```
you can overload it if you want

use it this way to create a View component with a width of `$1` that has it's children in a `row` direction, `centered` vertically
```typescript
<Stack fd='row' ai='center' w='$1' />
```


### now what is `'$1'`?? 

## Tokens
Tokens are basically shorthands for values

