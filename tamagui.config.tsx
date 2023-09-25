import { shorthands } from '@tamagui/shorthands';
import { CreateTamaguiProps, createTamagui } from 'tamagui';
import { themes } from './styles/theme';
import { bodyFont, headingFont } from './styles/fonts';
import { animations } from './styles/animation';
import { tokens } from '@tamagui/themes';

const props = {
  themes: themes,
  shorthands: shorthands,
  tokens: tokens,
  animations: animations,
  defaultFont: 'body',
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
} satisfies CreateTamaguiProps;

const tamaguiConfig = createTamagui(props);
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}
export default tamaguiConfig;
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
