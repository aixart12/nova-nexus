import { Document } from './Document';
import { NextLoader } from './NextLoader';

export const metadata = {
  title: 'Welcome to sdm',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Document>
      <NextLoader />
      {children}
    </Document>
  );
}
