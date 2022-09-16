import React, { useEffect, useRef } from 'react';

const Utterances = () => {
  const ref = useRef<HTMLDivElement>(null);

  const utterancesSettings = {
    src: 'https://utteranc.es/client.js',
    repo: 'LEEHYUNHO2001/ayaanlog',
    'issue-term': 'url',
    label: 'utterances',
    theme: 'github-light',
    crossorigin: 'anonymous',
    async: 'true',
  };

  useEffect(() => {
    const isRender = document.querySelector('.utterances');
    if (!isRender) {
      if (ref.current !== null) {
        const utterances = document.createElement('script');

        Object.entries(utterancesSettings).forEach(([key, value]) => {
          utterances.setAttribute(key, value);
        });

        ref.current.appendChild(utterances);
      }
    }
  }, []);

  return <div ref={ref} />;
};

export default Utterances;
