import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    // Light
    {
      path: '/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },

    // Regular
    {
      path: '/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    // Medium
    {
      path: '/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },

    // Medium Italic
    {
      path: '/fonts/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },

    // Bold
    {
      path: '/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

    // Bold Italic
    {
      path: '/fonts/Satoshi-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },

    // Black
    {
      path: '/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },

    // Black Italic
    {
      path: '/fonts/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
});
