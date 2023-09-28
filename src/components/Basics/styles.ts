import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  width: 90%;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.Galaxy['White-100']};
  justify-content: center;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  font-family: 'Raleway-Regular';
`;
