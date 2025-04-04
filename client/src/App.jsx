import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import s from './styles.module.css';
import { MdAdsClick } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { SiFusionauth } from 'react-icons/si';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiNewspaperClippingLight } from 'react-icons/pi';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes/AppRoutes.jsx';
import { routes } from './routes/routes.js';
import { NewsProvider } from './contexts/NewsProvider.jsx';

const Items = [
  { name: 'Clicker', icon: <MdAdsClick />, url: routes.counter },
  { name: 'Form1', icon: <FaWpforms />, url: routes.form1 },
  { name: 'Form2', icon: <SiFusionauth />, url: routes.form2 },
  { name: 'FlexTest', icon: <LuLayoutDashboard />, url: routes.flexTest },
  { name: 'ClassComponent', icon: <LuLayoutDashboard />, url: routes.classComponents },
  { name: 'News', icon: <PiNewspaperClippingLight />, url: routes.news },
  { name: 'Friends', icon: <PiNewspaperClippingLight />, url: routes.friends }
];

export const App = () => {
  const [page, setPage] = useState(Items[4].name);

  return (
    <BrowserRouter>
      <NewsProvider>
        <div className={s.container}>
          <Header />
          <div className={s.main}>
            <Sidebar page={page} setPage={setPage} Items={Items} />
            <div className={s.content}>
              <AppRoutes />
            </div>
          </div>
        </div>
      </NewsProvider>
    </BrowserRouter>
  );
};
