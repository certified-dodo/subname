import { createInterFont } from '@tamagui/font-inter';

// true is the default value
export const headingFont = createInterFont({
    size: {
        true: 4,
        6: 15,
    },

    transform: {
        true: 'none',
        6: 'uppercase',
        7: 'none',
    },
    weight: {
        true: '700',
        6: '400',
        7: '700',
    },
    color: {
        true: '$color',
        6: '$colorFocus',
        7: '$color',
    },
    letterSpacing: {
        true: 0,
        5: 2,
        6: 1,
        7: 0,
        8: -1,
        9: -2,
        10: -3,
        12: -4,
        14: -5,
        15: -6,
    },
    face: {
        700: { normal: 'InterRegular' },
    },
});

// true is the default value. 
export const bodyFont = createInterFont({
    size: {
        true: 14,
    },
    letterSpacing: {
        true: 0.5
    },
    lineHeight: {
        true: 20
    },
    weight: {
        true: 400,
    },
    color: {
        true: '$colorFocus',
    },
    face: {
        400: { normal: 'InterBold' },
    },
}
);