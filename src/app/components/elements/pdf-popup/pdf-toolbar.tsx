import React from 'react';
import { ToolbarSlot } from '@react-pdf-viewer/toolbar';
import { ToolbarProps } from '@react-pdf-viewer/default-layout';

export const renderToolbar = (
  Toolbar: (props: ToolbarProps) => React.ReactElement
) => (
  <Toolbar>
    {(slots: ToolbarSlot) => {
      const {
        Download,
        Zoom,
        GoToPreviousPage,
        GoToNextPage,
        CurrentPageInput,
        NumberOfPages,
        ZoomIn,
        ZoomOut,
      } = slots;
      return (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '2px ' }}>
              <ZoomOut />
            </div>
            <div style={{ padding: '2px' }}>
              <Zoom />
            </div>
            <div style={{ padding: '2px ' }}>
              <ZoomIn />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '2px ' }}>
              <GoToPreviousPage />
            </div>
            <div
              style={{
                padding: '2px ',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CurrentPageInput />
            </div>
            <div style={{ padding: '2px ' }}>
              <GoToNextPage />
            </div>
          </div>

          <div style={{ padding: '2px 4px' }}>
            <Download />
          </div>
        </div>
      );
    }}
  </Toolbar>
);
