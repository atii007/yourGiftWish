import { colors } from './colors';
import { typography } from './typography';

export const theme = (font: string) => ({
  palette: colors,
  typography: { fontFamily: font, ...typography(font) },
  spacing: 4,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
