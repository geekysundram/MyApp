//SplashScreen Styles
import styled from 'styled-components';
import { Text, View } from 'react-native';
import themeColor from '../../theme/color';
import { height, spacing, width } from '../../helpers/dimensions';
  const Wrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${height.h100}px;
  background-color: ${themeColor.primary};
`;

const WelcomeText = styled(Text)`
  position: absolute;
  width: ${width.w050}px;
  bottom: ${spacing.v40}px;
  text-align: center;
  font-size: 20px;
  color: ${themeColor.white};
`;

export { Wrapper, WelcomeText };