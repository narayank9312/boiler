import type { Component } from '@/types';
import type { TextFieldProps, TooltipProps } from '@mui/material';

export type UITextFieldProps = TextFieldProps & {
  className?: string;
  id: string;
  tooltip?: string;
  maxLength: number;
  required?: boolean;
  errorText?: string;
  showCounter?: boolean;
  tooltipIcon?: Component;
  value: string;
};
