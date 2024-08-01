import React from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';

import { CodeWrapper } from '@/components/UI/code/Code.styled';

import type { Component } from '@/types';
import type { Code as CodeType } from '@gofynd/nitrozen-react';

const NitrozenCode = dynamic(async () => import('@gofynd/nitrozen-react').then(c => c.Code), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type CodeProps = Parameters<typeof CodeType>[0];

export interface UICodeProps extends CodeProps {
  className?: string;
}

const Code: Component<UICodeProps> = props => {
  const { className, ...restProps } = props;

  return (
    <CodeWrapper className={clsx('ui-code', className)}>
      <NitrozenCode {...restProps} />
    </CodeWrapper>
  );
};

export default Code;
