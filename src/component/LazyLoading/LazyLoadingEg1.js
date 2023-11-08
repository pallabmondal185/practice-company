import React, { Suspense, lazy } from 'react';
// import CompLazy1 from './CompLazy1';
import CompLazy2 from './CompLazy2';
import LazyImg from '../../assets/lazyLoad.jpg'

const CompLazy1 = lazy(() => import('./CompLazy1'));

const LazyLoadingEg1 = () => {
    return (
        <div>
            <h1>Lazy Loading Eg</h1>
            <Suspense fallback={<div>please wait...</div>}>
                <CompLazy1 />
                <CompLazy1 />
                <CompLazy1 />
                <div> written inside suspense</div>
                <img src={LazyImg} style={{ width: "300px", height: "200px" }} />
            </Suspense>


            <CompLazy2 />
            <CompLazy2 />
            <CompLazy2 />

        </div>
    )
}

export default LazyLoadingEg1
