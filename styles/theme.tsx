
// https://tamagui.dev/docs/intro/themes#ensuring-valid-types

import { tokens } from "@tamagui/themes"

const light = {
    background: tokens.color.gray1Light,
    backgroundHover: tokens.color.gray2Light,
    backgroundPress: tokens.color.gray4Light,
    backgroundFocus: tokens.color.gray5Light,
    borderColor: tokens.color.gray4Light,
    borderColorHover: tokens.color.gray6Light,
    color: tokens.color.gray12Light,
    colorHover: tokens.color.gray11Light,
    colorPress: tokens.color.gray10Light,
    colorFocus: tokens.color.gray6Light,
    shadowColor: tokens.color.gray6Light,
    shadowColorHover: tokens.color.gray6Light
}
// note: we set up a single consistent base type to validate the rest:

type BaseTheme = typeof light
// the rest of the themes use BaseTheme

const dark: BaseTheme = {
    background: tokens.color.gray1Dark,
    backgroundHover: tokens.color.gray2Dark,
    backgroundPress: tokens.color.gray3Dark,
    backgroundFocus: tokens.color.gray4Dark,
    borderColor: tokens.color.gray3Dark,
    borderColorHover: tokens.color.gray4Dark,
    color: tokens.color.gray12Dark,
    colorHover: tokens.color.gray11Dark,
    colorPress: tokens.color.gray10Dark,
    colorFocus: tokens.color.gray6Dark,
    shadowColor: tokens.color.gray6Dark,
    shadowColorHover: tokens.color.gray7Dark,
}

const light_Button: BaseTheme = {
    ...light,
    background: tokens.color.gray10Light,
    backgroundPress: tokens.color.yellow10Light, // darker background on press
    backgroundHover: tokens.color.yellow11Light, // lighter background on hover
    color: tokens.color.gray1Light,
}
const light_Text: BaseTheme = {
    ...light,
    background: tokens.color.gray10Dark,
    backgroundPress: tokens.color.yellow10Light, // darker background on press
    backgroundHover: tokens.color.yellow11Light, // lighter background on hover
    color: tokens.color.gray1Light,
}

const light_accent_Button: BaseTheme = {
    ...light,
    background: tokens.color.blue6Light,
    backgroundPress: tokens.color.yellow10Light, // darker background on press
    backgroundHover: tokens.color.yellow11Light, // lighter background on hover
    color: tokens.color.blue10Light,
}

// color that pops out
const light_accent_Text: BaseTheme = {
    ...light,
    color: tokens.color.blue8Light,
}

// we recommend doing this because it avoids a category of confusing type errors
// 1. to get ThemeNames/Theme, first create an object with all themes

const allThemes = {
    dark,
    light,
    light_Button,
    light_Text,
    light_accent_Button,
    light_accent_Text,
}
// 2. then get the name type

type ThemeName = keyof typeof allThemes
// 3. then, create a Themes type that explicitly maps ThemeName => BaseTheme

type Themes = {
    [key in ThemeName]: BaseTheme

}
// 4. finally, export it with the stricter type

export const themes: Themes = allThemes
