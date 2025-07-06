'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pdfjs, Document, Page } from 'react-pdf';
import { Loader2Icon } from 'lucide-react';
import { useTranslations } from 'next-intl';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export const ResumePdfFile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const t = useTranslations('ResumePage');

  const handleOnLoadError = (err: Error) => {
    setIsError(true);
    setIsLoading(false);
    console.log('Error retriving pdf:', err.message);
  };

  const pdfUrl =
    'https://drive.google.com/file/d/16VvgBcRlW5yF-5KucNKpmWIndayH2_86/view?usp=sharing';

  return (
    <div className="mt-12 flex justify-center w-full">
      <div className="w-full max-w-4xl md:px-4">
        <Link
          onClick={(event) => {
            if (isError || isLoading) {
              event.preventDefault();
            }
          }}
          href={!isError ? pdfUrl : '#'}
          target="_blank"
          className={`${isError || isLoading ? 'cursor-default' : ''} hidden md:block`}
        >
          <Document
            file="/resume-june.pdf"
            onLoadSuccess={() => setIsLoading(false)}
            onLoadError={(err) => handleOnLoadError(err)}
            error={
              <span className="flex justify-center text-indigo-400 text-sm">
                {t('resumeUploadErrMessage')}
              </span>
            }
            loading={
              <span className="flex justify-center gap-2 text-sm">
                <Loader2Icon className="animate-spin h-6 w-6 text-indigo-400" />{' '}
                {t('title')}
              </span>
            }
          >
            <Page
              pageIndex={0}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="w-full h-auto border-1 border-text-secondary dark:border-text-hover"
            />
          </Document>
        </Link>
        {isError && (
          <Link
            href={pdfUrl}
            target="_blank"
            className="hidden md:block text-indigo-400 hover:text-indigo-500 underline font-light text-base"
          >
            {t('viewOnlineOption')}
          </Link>
        )}
        <Link
          href={pdfUrl}
          target="_blank"
          className="block md:hidden text-indigo-400 hover:text-indigo-500 underline font-light text-base"
        >
          {t('fullResumeOption')}
        </Link>
      </div>
    </div>
  );
};
