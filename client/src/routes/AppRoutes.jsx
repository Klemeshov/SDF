import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routes } from './routes.js';
import { Counter } from '../components/Counter/index.js';
import { Registration } from '../components/Registration/index.js';
import { AuthForm } from '../components/AuthForm/index.js';
import { FlexTest } from '../components/FlexTest/index.js';
import { ClassComponent } from '../components/ClassComponent/ClassComponent.jsx';
import { News } from '../components/News/index.js';
import { FriendPage } from '../components/FriendPage/FriendPage.jsx';
import { StyledComponentsTest } from '../components/StyledComponentsTest/StyledComponentsTest.jsx';
import { Counter2 } from '../components/Counter2/index.js';

const FriendsPage = lazy(() => import('../components/Friends/Friends.jsx'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.counter} element={<Counter />} />
      <Route path={routes.counter2} element={<Counter2 />} />
      <Route path={routes.form1} element={<Registration />} />
      <Route path={routes.form2} element={<AuthForm />} />
      <Route path={routes.flexTest} element={<FlexTest />} />
      <Route path={routes.classComponents} element={<ClassComponent />} />
      <Route
        path={routes.friends}
        element={
          <Suspense fallback={<div>123123 Loading...</div>}>
            <FriendsPage />
          </Suspense>
        }
      />
      <Route path={routes.news} element={<News />} />
      <Route path={routes.friendById} element={<FriendPage />} />
      <Route path={routes.scTest} element={<StyledComponentsTest />} />
      <Route path="*" element={<div>404 page not found</div>} />
    </Routes>
  );
};
