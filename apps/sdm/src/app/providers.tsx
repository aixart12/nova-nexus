import React, { FC } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import '@nova-nexus/library';
import { AVAILABLE_LANGUAGES } from '@nova-nexus/library';
import theme, { COLOR_MODE_STORAGE_KEY } from '@nova-nexus/theme';

const localStorageManager = createLocalStorageManager(COLOR_MODE_STORAGE_KEY);

export const Providers: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  return (
    <CacheProvider>
      <ChakraProvider
        colorModeManager={localStorageManager}
        theme={{
          ...theme,
          direction:
            AVAILABLE_LANGUAGES.find(({ key }) => key === i18n.language)?.dir ??
            'ltr',
        }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
