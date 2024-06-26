'use client';

import { useColorModeValue, useToken } from '@chakra-ui/react';
import HolyLoader from 'holy-loader';

export type NextLoaderProps = {
  darkColor?: string;
  lightColor?: string;
  showSpinner?: boolean;
};
export const NextLoader = ({
  lightColor = 'gray.900',
  darkColor = 'gray.300',
  showSpinner = false,
}: NextLoaderProps) => {
  const loaderColor = useToken('colors', lightColor);
  return (
    <HolyLoader
      height={2}
      zIndex={99999}
      color={loaderColor}
      showSpinner={showSpinner}
    />
  );
};
