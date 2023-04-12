import React from 'react';
import { Loading } from './app/components/screens';

function App() {
  const Layout = React.lazy(() => import('./app/components/layout/Layout'));

  return (
    <React.Suspense fallback={<Loading />}>
      <Layout />
    </React.Suspense>
  );
}

export default App;
