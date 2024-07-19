import AppConfigProvider from '@/components/AppConfigProvider';
import WindowHeader from '@/layout/WindowHeader';
import WindowMenu from '@/layout/WindowMenu';
import { Outlet } from '@umijs/max';
import React from 'react';

const Layout: React.FC = () => {
  return (
    <AppConfigProvider>
      <main className={'h-screen w-screen'}>
        <WindowHeader />
        <div className={'w-full h-full flex flex-1'}>
          <WindowMenu />
          <div id={'main-content'} className={'flex flex-1 h-full'}>
            <Outlet />
          </div>
        </div>
      </main>
    </AppConfigProvider>
  );
};
export default Layout;
