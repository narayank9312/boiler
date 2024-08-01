import { styled } from '@mui/material/styles';

export const AuthLayoutContainer = styled('div')(({ theme }) => ({
  '& .auth-section': {
    display: 'flex',
    padding: '56px 0 0 ' + theme.spacing(3) + 'px', 

    '& .auth-content': {
      flex: 1,
    },

    '& .auth-right': {
      paddingRight: 24,
    },
  },
}));