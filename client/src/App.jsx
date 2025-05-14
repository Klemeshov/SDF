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
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const Items = [
  { name: 'Clicker', icon: <MdAdsClick />, url: routes.counter },
  { name: 'Clicker2', icon: <MdAdsClick />, url: routes.counter2 },
  { name: 'Form1', icon: <FaWpforms />, url: routes.form1 },
  { name: 'Form2', icon: <SiFusionauth />, url: routes.form2 },
  { name: 'FlexTest', icon: <LuLayoutDashboard />, url: routes.flexTest },
  { name: 'ClassComponent', icon: <LuLayoutDashboard />, url: routes.classComponents },
  { name: 'News', icon: <PiNewspaperClippingLight />, url: routes.news },
  { name: 'Friends', icon: <PiNewspaperClippingLight />, url: routes.friends }
];

const theme = {
  colors: {
    bg: {
      default: '#545454'
    },
    text: {
      default: 'white'
    }
  }
};

export const App = () => {
  const [page, setPage] = useState(Items[4].name);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <SCThemeProvider theme={theme}>
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
        </SCThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
