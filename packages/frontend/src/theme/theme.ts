// Base color definitions
const baseColors = {
  // Primary Colors - Trust & Innovation Theme
  primary: {
    50: '#E6F0FF',
    100: '#CCE1FF',
    200: '#99C3FF',
    300: '#66A5FF',
    400: '#3387FF',
    500: '#0A1A5C', // Deep Navy Blue - Main primary
    600: '#08144A',
    700: '#060E38',
    800: '#040826',
    900: '#020214',
    DEFAULT: '#0A1A5C',
  },
  secondary: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00B4D8', // Vibrant Teal - Main secondary
    600: '#0096C7',
    700: '#0077B6',
    800: '#005885',
    900: '#003D5B',
    DEFAULT: '#00B4D8',
  },
  accent: {
    50: '#FFE5E5',
    100: '#FFCCCC',
    200: '#FF9999',
    300: '#FF6666',
    400: '#FF3333',
    500: '#FF6B6B', // Coral Red - Urgency, Action
    600: '#E55555',
    700: '#CC3F3F',
    800: '#B32929',
    900: '#991313',
    DEFAULT: '#FF6B6B',
  },
  // Status Colors
  success: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#28A745',
    600: '#1E7E34',
    700: '#155724',
    800: '#0F4E1A',
    900: '#0A3D12',
    DEFAULT: '#28A745',
  },
  warning: {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
    DEFAULT: '#FFC107',
  },
  error: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#DC3545',
    600: '#C62828',
    700: '#B71C1C',
    800: '#9A1A1A',
    900: '#7F1515',
    DEFAULT: '#DC3545',
  },
  info: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#17A2B8',
    600: '#138496',
    700: '#0F6674',
    800: '#0B4D5A',
    900: '#073340',
    DEFAULT: '#17A2B8',
  },
  // Special Elements
  blockchain: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#8A2BE2',
    600: '#7B1FA2',
    700: '#6A1B9A',
    800: '#4A148C',
    900: '#38006B',
    DEFAULT: '#8A2BE2',
  },
  ai: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF8A00',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
    DEFAULT: '#FF8A00',
  },
};

export const getTheme = (mode: 'light' | 'dark' = 'light') => {
  const isDark = mode === 'dark';
  
  return {
    mode,
    colors: {
      ...baseColors,
      // Neutral Palette - Theme aware
      white: '#FFFFFF',
      lightGray: isDark ? '#1E293B' : '#F8F9FA',
      mediumGray: isDark ? '#334155' : '#E9ECEF',
      gray: isDark
        ? {
            50: '#0F172A',
            100: '#1E293B',
            200: '#334155',
            300: '#475569',
            400: '#64748B',
            500: '#94A3B8',
            600: '#CBD5E1',
            700: '#E2E8F0',
            800: '#F1F5F9',
            900: '#FFFFFF',
          }
        : {
            50: '#F8F9FA',
            100: '#E9ECEF',
            200: '#DEE2E6',
            300: '#CED4DA',
            400: '#ADB5BD',
            500: '#6C757D',
            600: '#495057',
            700: '#343A40',
            800: '#212529',
            900: '#1A1A1A',
          },
      black: isDark ? '#F1F5F9' : '#1A1A1A',
      // Theme-aware colors
      background: isDark ? '#0F172A' : '#FFFFFF',
      surface: isDark ? '#1E293B' : '#FFFFFF',
      text: {
        primary: isDark ? '#FFFFFF' : '#1A1A1A',
        secondary: isDark ? '#CBD5E1' : '#495057',
        muted: isDark ? '#94A3B8' : '#6C757D',
      },
      border: isDark ? '#334155' : '#DEE2E6',
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      sm: isDark
        ? '0 1px 2px 0 rgb(0 0 0 / 0.3)'
        : '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      base: isDark
        ? '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)'
        : '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: isDark
        ? '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)'
        : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: isDark
        ? '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)'
        : '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: isDark
        ? '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)'
        : '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': isDark
        ? '0 25px 50px -12px rgb(0 0 0 / 0.5)'
        : '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0A1A5C 0%, #00B4D8 100%)',
      ai: 'linear-gradient(135deg, #6C63FF 0%, #4D8AF0 100%)',
      verification: 'linear-gradient(135deg, #00B4D8 0%, #28A745 100%)',
      blockchain: 'linear-gradient(135deg, #8A2BE2 0%, #00B4D8 100%)',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    typography: {
      h1: isDark ? '#F1F5F9' : '#0A1A5C',
      h2: isDark ? '#F1F5F9' : '#0A1A5C',
      h3: isDark ? '#CBD5E1' : '#343A40',
      body: isDark ? '#CBD5E1' : '#6C757D',
      caption: isDark ? '#94A3B8' : '#6C757D',
      link: '#00B4D8',
    },
    components: {
      button: {
        primary: '#00B4D8',
        primaryHover: '#0096C7',
        secondary: isDark ? '#1E293B' : '#FFFFFF',
        secondaryBorder: '#00B4D8',
        danger: '#DC3545',
        success: '#28A745',
        disabled: isDark ? '#334155' : '#E9ECEF',
      },
      form: {
        border: isDark ? '#334155' : '#E9ECEF',
        focus: '#00B4D8',
        error: '#DC3545',
        label: isDark ? '#CBD5E1' : '#343A40',
        placeholder: isDark ? '#64748B' : '#6C757D',
      },
      skillScore: {
        excellent: '#28A745',
        good: '#00B4D8',
        average: '#FFC107',
        poor: '#DC3545',
      },
    },
  };
};

export const theme = getTheme('light');

export type Theme = ReturnType<typeof getTheme>;
