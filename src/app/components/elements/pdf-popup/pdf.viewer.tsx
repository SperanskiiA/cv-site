import { Viewer, Worker } from '@react-pdf-viewer/core';
import {
  defaultLayoutPlugin,
  DefaultLayoutPluginProps,
} from '@react-pdf-viewer/default-layout';

import resume from '../../../assets/CV_SperanskiiAron.pdf';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

export const PDF = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
};
