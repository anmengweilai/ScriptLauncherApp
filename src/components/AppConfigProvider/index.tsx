/**
 *creation time:2024/7/18
 *author: anmengweilai
 */

import { StyleProvider } from '@ant-design/cssinjs';
import { ProConfigProvider } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { App, ConfigProvider } from 'antd';
import React, { useContext, useLayoutEffect } from 'react';

interface AppConfigProviderProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const CreateContent: React.FC = () => {
  const { locale, theme } = useContext(ConfigProvider.ConfigContext);
  useLayoutEffect(() => {
    ConfigProvider.config({
      holderRender: (children) => (
        <StyleProvider hashPriority="high">
          <ConfigProvider
            prefixCls="static"
            iconPrefixCls="icon"
            locale={locale}
            theme={theme}
          >
            <App notification={{ maxCount: 3 }}>{children}</App>
          </ConfigProvider>
        </StyleProvider>
      ),
    });
  }, [locale, theme]);
  return null;
};

const AppConfigProvider: React.FC<AppConfigProviderProps> = (props) => {
  const { children } = props;

  const { appConfig } = useModel('configModel');

  return (
    <ProConfigProvider>
      <ConfigProvider {...appConfig}>
        <App>
          {children}
          <CreateContent />
        </App>
      </ConfigProvider>
    </ProConfigProvider>
  );
};

export default AppConfigProvider;
