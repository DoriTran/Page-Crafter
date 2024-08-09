export interface GlobalStyle {
  color: { [key: string]: string };
  fontSize: { [key: string]: string };
  fontWeight: { [key: string]: number };
  breakpoints: { [key: string]: number };
  others: { [key: string]: string };
}

const global: GlobalStyle = {
  color: {
    // Primary color
    primary: "lavenderblush",
    primaryDark: "lavenderblush",
    primaryLight: "lavenderblush",
    // Secondary color
    secondary: "lavenderblush",
    secondaryDark: "lavenderblush",
    secondaryLight: "lavenderblush",
    // Sidebar & background color
    sidebar: "lavenderblush",
    background: "lavenderblush",
    // Text color
    text: "lavenderblush",
    textContrast: "lavenderblush",
    // Other color
    green: "#4CAF50",
    red: "#F44336",
    yellow: "#FFEB3B",
    black: "#000000",
    grey: "#A9A9A9",
  },
  fontSize: {
    small: "0.75rem", // 12px
    normal: "0.875rem", // 14px
    middle: "1rem", // 16px
    large: "1.125rem", // 18px
    huge: "1.25rem", // 20px
    extra: "1.5rem", // 24px
    moderate: "1.75rem", // 28px
    super: "2rem", // 32px
    ample: "3rem", // 48px
    brand: "4rem", // 64px
    slogan: "5rem", // 80px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  breakpoints: {
    screen: 1536,
    desktop: 1200,
    middle: 992,
    tablet: 768,
    phone: 576,
  },
  others: {
    expandedSidebar: "230px",
    collapedSidebar: "80px",
    leftPositionSidebar: "calc($230px - 80px)",
  },
};

export default global;
