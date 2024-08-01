import type { SX } from '@/types';

export const inputStyle: SX = theme => ({
  marginTop: '0px !important',
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#E0E0E0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E0E0E0',
    },
  },
  '& .MuiInputAdornment-root': {
    position: 'absolute',
    top: '-20px',
    right: '15px',
    transform: 'translateY(-50%)',
  },
});
