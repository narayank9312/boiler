import React from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';

import { DialogWrapper } from '@/components/UI/dialog/Dialog.styled';

import type { Layout } from '@/types';
import type { Dialog as DialogType } from '@gofynd/nitrozen-react';

const NitrozenDialog = dynamic<DialogProps>(
  // @ts-expect-error add null type in dialog props
  async () => import('@gofynd/nitrozen-react').then(c => c.Dialog),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

type DialogProps = Parameters<typeof DialogType>[0];

export interface UIDialogProps extends DialogProps {
  className?: string;
}

const UIDialog: Layout<UIDialogProps> = props => {
  const { children, className, ...restProps } = props;

  return (
    <DialogWrapper className={clsx('ui-dialog', className)}>
      <NitrozenDialog {...restProps}>
        <div>{children}</div>
      </NitrozenDialog>
    </DialogWrapper>
  );
};

export default UIDialog;
