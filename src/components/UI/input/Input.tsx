import React from 'react';

import {
  TextField as MuiTextField,
  InputLabel,
  FormControl,
  Tooltip,
  IconButton,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/material/styles';

import clsx from 'clsx';

import { inputStyle } from '@/components/UI/input/Input.style';

import type { UITextFieldProps } from '@/components/UI/input/Input.type';
import type { Component } from '@/types';
import type { TooltipProps } from '@mui/material';

const LabelWithTooltip = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  '& .MuiTooltip-tooltip': {
    backgroundColor: '#f5f5f5',
    color: '#000',
    boxShadow: '0px 4px 4px 0px #9E9E9E40',
    fontSize: '12px',
    borderRadius: '8px',
    padding: '8px 16px',
    flexWrap: 'wrap',
    display: 'flex',
    width: '229px',
    lineHeight: '16px',
    '& .MuiTooltip-arrow': {
      backgroundColor: '#f5f5f5',
      boxShadow: '0px 4px 4px 0px #9E9E9E40',
    },
  },
});

const UIInput: Component<UITextFieldProps> = props => {
  const {
    label,
    id,
    className,
    required,
    tooltip,
    tooltipIcon: TooltipIcon = HelpIcon,
    value,
    onChange,
    maxLength,
    showCounter,
    error,
    helperText,
    errorText,
    ...restProps
  } = props;

  return (
    <FormControl variant="standard" fullWidth sx={{ position: 'relative', mt: 2 }}>
      <LabelWithTooltip>
        <InputLabel
          htmlFor={id}
          sx={{
            position: 'relative',
            top: '1px',
            left: '9px',
            zIndex: 1,
            padding: '0 5px',
            fontSize: '14px',
            transform: 'none',
            '&.Mui-focused': {
              color: '#000',
            },
          }}
        >
          {label}
          {required && <span>*</span>}
        </InputLabel>
        {tooltip && (
          <CustomTooltip title={tooltip} placement="top" arrow>
            <IconButton size="small">
              <TooltipIcon fontSize="small" />
            </IconButton>
          </CustomTooltip>
        )}
      </LabelWithTooltip>
      <MuiTextField
        id={id}
        variant="outlined"
        fullWidth
        margin="normal"
        sx={inputStyle}
        required={required}
        inputProps={{ maxLength }}
        value={value}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          endAdornment: showCounter ? (
            <InputAdornment position="end">
              <span>{`${value.length}/${maxLength}`}</span>
            </InputAdornment>
          ) : null,
        }}
        helperText={error ? '' : helperText}
        error={error}
        // InputLabelProps={{ shrink: false }}
        className={clsx('MuiOutlinedInput-root', className)}
        {...restProps}
      />
      {error && (
        <FormHelperText sx={{ display: 'flex', alignItems: 'center' }}>
          <ErrorIcon color="error" fontSize="small" sx={{ mr: 1 }} />
          {errorText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default UIInput;
