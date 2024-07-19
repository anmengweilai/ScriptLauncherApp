import { ConfigProviderProps } from 'antd';
import { useCallback, useState } from 'react';

const DEFAULT_CONFIG: Partial<ConfigProviderProps> = {
  theme: {
    token: {
      colorPrimary: '#9b59b6',
    },
    components: {},
  },
};

export default function () {
  const [config, setConfig] =
    useState<Partial<ConfigProviderProps>>(DEFAULT_CONFIG);

  const onChangeSetting = useCallback((value: Partial<ConfigProviderProps>) => {
    setConfig((prevState) => ({
      ...prevState,
      ...value,
    }));
  }, []);

  return {
    appConfig: config,
    onChangeSetting,
  };
}
