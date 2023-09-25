import React from 'react';
import { Button, SizableText, Stack, TamaguiProvider, Text, YStack } from 'tamagui';
import config from './tamagui.config';

function App(): JSX.Element {
  return (
    <TamaguiProvider config={config}>
      <YStack theme='light' ai='center' jc='center' h='100%'>

        <Button>Default</Button>
        <Button theme='accent'>theme='accent'</Button>
        <Button theme='accent_Button'>theme='accent_Button'</Button>

        <Stack p='$4' />

        <Text>Default Text</Text>
        <Text theme='accent'>theme='accent'</Text>
        <Text theme='accent_Text'>theme='accent_Text'</Text>

        <Stack p='$4' />

        <SizableText>Default SizableText</SizableText>
        <SizableText theme='accent'>theme='accent'</SizableText>
        <SizableText theme='accent_Text'>theme='accent_Text'</SizableText>
      </YStack>
    </TamaguiProvider>
  );
}

export default App;
