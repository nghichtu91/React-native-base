// import original module declarations
import 'styled-components';
import colors from '@Theme/doctor/color';
import sizes from '@Theme/doctor/sizes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    sizes?: typeof sizes;
    // fonts?: typeof sizes;
  }
}
