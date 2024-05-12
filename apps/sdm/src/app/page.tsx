'use client';

import { APP_PATH } from '@nova-nexus/features';
import { redirect } from 'next/navigation';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  redirect(APP_PATH || '/');
}
