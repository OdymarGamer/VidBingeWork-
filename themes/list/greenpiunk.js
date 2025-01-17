import { createTheme } from "../types";

const tokens = {
  black: "#000000",
  white: "#FFFFFF",
  semantic: {
    silver: {
      c100: "#DEDEDE",
      c200: "#B6CAD7",
      c300: "#8EA3B0",
      c400: "#617A8A",
    },
  },
  green: {
    c50: "#e0ffe0",
    c100: "#b3ffb3",
    c200: "#80ff80",
    c300: "#4dff4d",
    c400: "#1aff1a",
    c500: "#00e600",
    c600: "#00b300",
    c700: "#008000",
    c800: "#006600",
    c900: "#004d00"
  },
  pink: {
    c50: "#ffe0f0",
    c100: "#ffb3d1",
    c200: "#ff80b3",
    c300: "#ff4d94",
    c400: "#ff1a75",
    c500: "#e6005c",
    c600: "#b30047",
    c700: "#800033",
    c800: "#660029",
    c900: "#4d0020"
  },
  shade: {
    c50: "#f0f0f0",
    c100: "#d9d9d9",
    c200: "#c2c2c2",
    c300: "#adadad",
    c400: "#999999",
    c500: "#858585",
    c600: "#717171",
    c700: "#5e5e5e",
    c800: "#4b4b4b",
    c900: "#3a3a3a"
  }
};

export default createTheme({
  name: "greenpiunk",
  extend: {
    colors: {
      themePreview: {
        primary: tokens.green.c400,
        secondary: tokens.pink.c400
      },

      pill: {
        background: tokens.pink.c100,
        backgroundHover: tokens.green.c100,
        highlight: tokens.green.c500,
        activeBackground: tokens.pink.c500,
      },

      global: {
        accentA: tokens.green.c300,
        accentB: tokens.pink.c300
      },

      lightBar: {
        light: tokens.shade.c900,
      },

      buttons: {
        toggle: tokens.green.c500,
        toggleDisabled: tokens.shade.c500,
        secondary: tokens.pink.c500,
        secondaryHover: tokens.pink.c400,
        cancel: tokens.shade.c700,
        cancelHover: tokens.shade.c800
      },

      background: {
        main: tokens.pink.c50,
        secondary: tokens.green.c50,
        secondaryHover: tokens.pink.c100,
        accentA: tokens.green.c50,
        accentB: tokens.pink.c50
      },

      modal: {
        background: tokens.pink.c200,
      },

      type: {
        logo: tokens.green.c300,
        text: tokens.shade.c50,
        dimmed: tokens.shade.c100,
        divider: tokens.shade.c400,
        secondary: tokens.pink.c600,
        link: tokens.green.c300,
        linkHover: tokens.green.c100
      },

      search: {
        background: tokens.pink.c300,
        hoverBackground: tokens.green.c300,
        focused: tokens.green.c600,
        placeholder: tokens.pink.c600,
        icon: tokens.green.c500
      },

      mediaCard: {
        hoverBackground: tokens.green.c700,
        hoverAccent: tokens.pink.c700,
        hoverShadow: tokens.black,
        shadow: tokens.shade.c800,
        barColor: tokens.green.c400,
        barFillColor: tokens.pink.c400,
        badge: tokens.green.c500,
        badgeText: tokens.pink.c100
      },

      largeCard: {
        background: tokens.green.c300,
        icon: tokens.pink.c500
      },

      dropdown: {
        background: tokens.pink.c200,
        altBackground: tokens.green.c200,
        hoverBackground: tokens.pink.c300,
        text: tokens.shade.c50,
        secondary: tokens.pink.c100,
        border: tokens.shade.c400,
        contentBackground: tokens.green.c100
      },

      authentication: {
        border: tokens.shade.c300,
        inputBg: tokens.green.c300,
        inputBgHover: tokens.green.c200,
        wordBackground: tokens.pink.c200,
        copyText: tokens.pink.c600,
        copyTextHover: tokens.pink.c400
      },

      settings: {
        sidebar: {
          activeLink: tokens.green.c400,
          badge: tokens.pink.c400,

          type: {
            secondary: tokens.green.c300,
            inactive: tokens.pink.c500,
            icon: tokens.green.c500,
            iconActivated: tokens.pink.c200,
            activated: tokens.pink.c100
          }
        },

        card: {
          border: tokens.green.c700,
          background: tokens.green.c700,
          altBackground: tokens.pink.c700
        },

        saveBar: {
          background: tokens.pink.c300
        }
      },

      utils: {
        divider: tokens.pink.c300
      },

      errors: {
        card: tokens.green.c600,
        border: tokens.pink.c500,

        type: {
          secondary: tokens.pink.c100
        }
      },

      about: {
        circle: tokens.green.c300,
        circleText: tokens.pink.c50
      },

      editBadge: {
        bg: tokens.pink.c500,
        bgHover: tokens.pink.c400,
        text: tokens.green.c100
      },

      progress: {
        background: tokens.pink.c100,
        preloaded: tokens.pink.c300,
        filled: tokens.green.c400
      },

      video: {
        buttonBackground: tokens.pink.c700,

        autoPlay: {
          background: tokens.green.c800,
          hover: tokens.green.c600 
        },

        scraping: {
          card: tokens.green.c500,
          loading: tokens.pink.c400,
          noresult: tokens.green.c100
        },

        audio: {
          set: tokens.pink.c300
        },

        context: {
          background: tokens.pink.c200,
          light: tokens.shade.c50,
          border: tokens.green.c600,
          hoverColor: tokens.green.c500,
          buttonFocus: tokens.green.c400,
          flagBg: tokens.green.c500,
          inputBg: tokens.green.c600,
          buttonOverInputHover: tokens.green.c500,
          inputPlaceholder: tokens.pink.c300,
          cardBorder: tokens.pink.c700,
          slider: tokens.green.c50,
          sliderFilled: tokens.pink.c200,

          buttons: {
            list: tokens.green.c700,
            active: tokens.pink.c900
          },

          closeHover: tokens.green.c800,

          type: {
            secondary: tokens.green.c200,
            accent: tokens.pink.c400,
            main: tokens.semantic.silver.c300
          }
        }
      }
    }
  }
});
