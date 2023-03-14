import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resume from '../../../assets/CV_SperanskiiAron.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState } from 'react';

import styles from './pdf.module.scss';
import { IconButton, useMediaQuery } from '@mui/material';
import { pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import { StyledEngineProvider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { blue } from '../../../assets/colors';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
        <StyledEngineProvider injectFirst>
          <div className={styles.buttons}>
            <div className={styles.btn}>
              <IconButton
                disabled={pageNumber > 1 ? false : true}
                onClick={back}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </div>
            <div>
              <p style={{ margin: 0 }}>
                Page {pageNumber} of {numPages}
              </p>
            </div>

            <div className={styles.btn}>
              <IconButton
                disabled={numPages && pageNumber < numPages ? false : true}
                onClick={forward}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
          <div className={styles.download}>
            <Button
              className={styles.download_btn}
              variant="outlined"
              href={resume}
              LinkComponent="a"
              download={true}
            >
              download
            </Button>
          </div>
        </StyledEngineProvider>
      </div>
    </>
  );
};
