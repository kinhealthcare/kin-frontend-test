import styled from 'styled-components';
import { Box, Text } from 'rebass/styled-components';

export const Container = styled(Box)`
  background-color: #fafafa;
  padding-top: 30px;
  padding-left: 8.1%;
  padding-right: 8.1%;
  min-height: 67.9vh;
  width: ${typeof window !== 'undefined' ? window.innerWidth : 'auto'};
`;

export const Heading = styled(Text)`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #7f7f7f;
`;

export const SubText = styled(Text)`
  margin-top: -20px;
  font-family: Roboto;
  font-size: 12px;
  color: #b2b2b2;
  margin-bottom: 30px;
`;

export const SmallText = styled(Text)`
  width: 129px;
  height: 12px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 300;
  color: #b2b2b2;
  margin-top: 10px;
`;
