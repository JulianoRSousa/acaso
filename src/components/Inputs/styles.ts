import styled from 'styled-components/native';

export const ContainerWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  margin-top: 5px;
  background-color: ${({theme}) =>
    theme.colors.GreyScale['Background-Dark-400']};
`;
export const RightIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  padding-right: 20px;
`;

export const InputField = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({theme}) => theme.colors.GreyScale['White-100']};
`;

export const ErrorText = styled.Text`
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${({theme}) => theme.colors.Galaxy['Accent-500']};
  font-size: 12px;
  font-family: 'Raleway-Bold';
`;
