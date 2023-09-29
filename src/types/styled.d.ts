import 'styled-components';
import light from '../theme/light';

declare module 'styled-components/native' {
  type AcasoTheme = typeof light;
  export interface DefaultTheme extends AcasoTheme {}
}
