import {
  PageLayout,
  SpecialZoomLevel,
  Viewer,
  Worker,
} from '@react-pdf-viewer/core';
import {
  defaultLayoutPlugin,
  DefaultLayoutPluginProps,
  ToolbarProps,
} from '@react-pdf-viewer/default-layout';

import resume from '../../../assets/CV_SperanskiiAron (2).pdf';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { renderToolbar } from './pdf-toolbar';

// const pageLayout: PageLayout = {
//   transformSize: ({ size }) => ({
//     height: size.height + 30,
//     width: size.width + 30,
//   }),
// };

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
        // pageLayout={pageLayout}
        defaultScale={SpecialZoomLevel.PageFit}
      />
    </Worker>
  );
};
