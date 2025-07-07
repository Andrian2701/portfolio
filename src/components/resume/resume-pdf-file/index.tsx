'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pdfjs, Document, Page } from 'react-pdf';
import { Loader2Icon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export const ResumePdfFile = () => {
  const [pdfState, setPdfState] = useState({
    loading: true,
    error: false,
  });
  const t = useTranslations('ResumePage');
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const pdfUrl = '/resume-june.pdf';
  const pdfGoogleDriveUrl =
    'https://drive.google.com/file/d/16VvgBcRlW5yF-5KucNKpmWIndayH2_86/view?usp=sharing';

  const handleOnLoadError = (err: Error) => {
    setPdfState({
      loading: false,
      error: true,
    });
    console.log('Error retriving pdf:', err.message);
  };

  const handleOnLoadSuccess = () => {
    setPdfState((prev) => ({ ...prev, isLoading: false }));
  };

  return (
    <div className="mt-12 flex justify-center w-full">
      <div className="w-full max-w-4xl md:px-4">
        {!isMobile && (
          <>
            <Link
              onClick={(event) => {
                if (pdfState.error || pdfState.loading) {
                  event.preventDefault();
                }
              }}
              href={!pdfState.error ? pdfGoogleDriveUrl : '#'}
              target="_blank"
              className={`${pdfState.error || pdfState.loading ? 'cursor-default' : ''} hidden md:block`}
            >
              <Document
                file={pdfUrl}
                onLoadSuccess={handleOnLoadSuccess}
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
            {pdfState.error && (
              <Link
                href={pdfGoogleDriveUrl}
                target="_blank"
                className="hidden md:block text-indigo-400 hover:text-indigo-500 underline font-light text-base"
              >
                {t('viewOnlineOption')}
              </Link>
            )}
          </>
        )}
        <Link
          href={pdfGoogleDriveUrl}
          target="_blank"
          className="block md:hidden text-indigo-400 hover:text-indigo-500 underline font-light text-base"
        >
          {t('fullResumeOption')}
        </Link>
      </div>
    </div>
  );
};
