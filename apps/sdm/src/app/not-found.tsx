'use client';

import { Suspense } from 'react';

import { ErrorPage } from '@nova-nexus/components';

export default function PageNotFound() {
  return (
    <Suspense>
      <ErrorPage errorCode={404} />
    </Suspense>
  );
}
