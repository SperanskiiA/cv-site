import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resume from '../../../assets/CV_SperanskiiAron.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState } from 'react';

import styles from './pdf.module.scss';
import { useMediaQuery } from '@mui/material';

export const Viewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const onDocumentLoadSuccess = (pdf: any) => {
    const { numPages } = pdf;
    setNumPages(numPages);

    console.log(numPages);
  };

  const changePage = (offset: number) => {
    setPageNumber((prev) => prev + offset);
  };

  const back = () => changePage(-1);
  const forward = () => changePage(+1);

  return (
    <>
      <div className={styles.wrap}>
        <Document
          className={styles.pdf}
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.log('error: ' + error)}
        >
          <Page height={isMobile ? 550 : 600} pageNumber={pageNumber} />
        </Document>
        <div className={styles.buttons}>
          <div className={styles.btn}>
            {pageNumber > 1 ? <a onClick={back}>prev</a> : <p>prev</p>}
          </div>
          <div>
            <p style={{ margin: 0 }}>
              Page {pageNumber} of {numPages}
            </p>
          </div>

          <div className={styles.btn}>
            {numPages && pageNumber < numPages ? (
              <a onClick={forward}>next</a>
            ) : (
              <p>next</p>
            )}
          </div>
        </div>
        <div className={styles.download}>
          <a href={resume} download>
            download
          </a>
        </div>
      </div>
    </>
  );
};
