
import { createAnimations } from '@tamagui/animations-react-native';

export const animations = createAnimations({
    bouncy: {
        type: 'spring',
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
    lazy: {
        type: 'spring',
        damping: 20,
        stiffness: 60,
    },
    quick: {
        type: 'spring',
        damping: 20,
        mass: 0.7,
        stiffness: 200,
    },
});
