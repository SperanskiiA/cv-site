import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import resume from '../../../assets/CV_SperanskiiAron (2).pdf';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { renderToolbar } from './pdf-toolbar';

export const PDF = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar,
  });
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={resume}
        plugins={[defaultLayoutPluginInstance]}
        defaultScale={SpecialZoomLevel.PageFit}
      />
    </Worker>
  );
};
