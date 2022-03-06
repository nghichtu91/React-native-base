// import original module declarations
import 'styled-components';
import colors from '@Theme/doctor/color';
import sizes from '@Theme/doctor/sizes';
import { DefaultTheme } from 'react-native-paper';

// and extend them!

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      // superLight: ThemeFont;
    }
    interface ThemeColors {
      // customColor: string;
    }
    interface ThemeAnimation {
      // customProperty: number;
    }
    interface Theme {
      // userDefinedThemeProperty: string;
    }
  }
}

type PaperType = typeof DefaultTheme;
declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: typeof colors;
    sizes?: typeof sizes;
    roundness: number;
    fonts?: Pick<PaperType, 'fonts'>;
  }
}
