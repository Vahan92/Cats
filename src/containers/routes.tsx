import React, { lazy } from 'react';
const Home = lazy(() => import('./Home'));

export const ROUTES = [ 
  {
    path: '/:id',
    component: Home,
    key: 'home',
    exact: false
  },  
  {
    path: '*',
    component: () => <div>Not found</div>,
    key: 'not-found'
  }
];
