/**
 *creation time:2024/7/18
 *author: anmengweilai
 */

import React from 'react';


interface AppIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {

  [key: string]: any;
}

const AppIframe: React.FC<AppIframeProps> = (props) => {

  const {...iframeProps} = props;

  return (
    <iframe {...iframeProps}></iframe>
  );
};

export default AppIframe;
