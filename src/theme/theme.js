const size = {
  xxl: '1920px',
  xl: '1440px',
  lg: '1200px',
  md: '992px',
  sm: '768px',
  xs: '576px',
  xxs: '350px',
};

const device = {
  xxl: `screen and (max-width: ${size.xxl})`,
  xl: `screen and (max-width: ${size.xl})`,
  lg: `screen and (max-width: ${size.lg})`,
  md: `screen and (max-width: ${size.md})`,
  sm: `screen and (max-width: ${size.sm})`,
  xs: `screen and (max-width: ${size.xs})`,
  xxs: `screen and (max-width: ${size.xxs})`,
  minXxl: `screen and (min-width: ${size.xxl})`,
  minXl: `screen and (min-width: ${size.xl})`,
  minLg: `screen and (min-width: ${size.lg})`,
  minMd: `screen and (min-width: ${size.md})`,
  minSm: `screen and (min-width: ${size.sm})`,
  minXs: `screen and (min-width: ${size.xs})`,
};

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const ACCENT = '#007bff';
const DARK_BG = '#020c1b';
const BG = '#0a192f';

module.exports = {
  lightTheme: {
    size,
    device,
    cPrimary: '#6D83F2',
    cSecondary: '#6A98F0',
    cWhite: '#fff',
    cBlack: '#000',
    cBackground: '#fff',
    cBlue: '#007bff',
    cDarkNavy: DARK_BG,
    cNavy: BG,
    cLightNavy: '#172a45',
    cLightestNavy: '#303C55',
    cSlate: '#8892b0',
    cLightSlate: '#a8b2d1',
    cLightestSlate: '#ccd6f6',
    cGreen: ACCENT,
    cTransGreen: hex2rgba(ACCENT, 0.07),
    cShadowNavy: hex2rgba(DARK_BG, 0.7),
    fonts: {
      Calibre:
        'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
      SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    },
  },
  darkTheme: {
    size,
    device,
    cPrimary: '#6D83F2',
    cSecondary: '#6A98F0',
    cBlack: '#fff',
    cWhite: '#000',
    cBackground: '#171c28',
    cBlue: '#007bff',
    cDarkNavy: DARK_BG,
    cNavy: BG,
    cLightNavy: '#172a45',
    cLightestNavy: '#303C55',
    cSlate: '#8892b0',
    cLightSlate: '#a8b2d1',
    cLightestSlate: '#ccd6f6',
    cGreen: ACCENT,
    cTransGreen: hex2rgba(ACCENT, 0.07),
    cShadowNavy: hex2rgba(DARK_BG, 0.7),
    fonts: {
      Calibre:
        'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
      SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    },
  },
};
