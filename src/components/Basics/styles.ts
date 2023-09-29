import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 85%;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.Galaxy['White-100']};
  justify-content: center;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  font-family: 'Raleway-Regular';
`;
