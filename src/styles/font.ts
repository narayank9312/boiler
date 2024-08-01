import localFont from 'next/font/local';

export const jioType = localFont({
  src: [
    {
      path: '../assets/fonts/jioType-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/jioType-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/jioType-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/jioType-Light.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});
