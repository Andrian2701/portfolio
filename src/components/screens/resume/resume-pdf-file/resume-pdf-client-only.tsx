'use client';

import dynamic from 'next/dynamic';

const ResumePdfFile = dynamic(
  () => import('./index').then((mod) => mod.ResumePdfFile),
  { ssr: false }
);

export default ResumePdfFile;
