'use client';

import { Link } from '@chakra-ui/next-js';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
      About
    </Link>
  );
}
