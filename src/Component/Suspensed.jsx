import React, { Suspense } from 'react';

// Lazy load the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function Suspensed() {
  
  return (
    <div>
      <h1>My Application</h1>
      {/* Use Suspense to show fallback UI while LazyComponent is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default Suspensed;
