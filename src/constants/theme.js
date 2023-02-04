import { extendTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
const {
  Button,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
  Checkbox,
  Progress,
} = chakraTheme.components;

export const theme = extendTheme({
  components: {
    Button,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Spinner,
    Checkbox,
    Progress,
  },

  colors: {
    primary: '#2470A0',
    accent: '#000b09',
    contactBg: '#7c99de',
    linkActive: '#ffffff',
    secondaryBg: '#d2dfff',
    thirdBg: '#b5c1dd',
    errorBg: '#d79f9f',
    warningIcon: '#fc5757',
    error: '#FAF0F0',
    button: '#319795',
    buttonActive: '#285E61',
    lightColor: '#ffffff',
  },
  space: [
    '0px',
    '4px',
    '8px',
    '16px',
    '32px',
    '56px',
    '64px',
    '128px',
    '256px',
    '512px',
  ],

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    ml: '24px',
    l: '28px',
    xl: '36px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  borders: {
    none: 'none',
    light: '1px solid',
    normal: '3px solid',
  },
  radii: { none: '0', normal: '4px', round: '50%' },
  textShadows: {
    nav: '7px 3px 17px rgba(255, 255, 255, 0.5)',
  },
  shadows: {
    main: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    items:
      'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  },
});
