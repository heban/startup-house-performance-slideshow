import styled from '@emotion/styled/macro';
import { Image } from 'spectacle';

const colors = {
  primary: '#0066ff',
  secondary: '#fff',
  tertiary: '#0066ff',
  quaternary: '#9a9a9a',
  error: '#f15c5c',
  warning: '#f7b12f',
};

export const IntroBox = styled.div`
  border: 10px solid ${colors.primary};
  max-width: 680px;
  padding: 32px 20px;
  margin: 0 auto;
`;

export const Mark = styled.span`
  color: ${colors.tertiary};
`;

export const RedMark = styled(Mark)`
  color: ${colors.error};
  font-weight: bold;
  font-size: 42px;
`;

export const YellowMark = styled(Mark)`
  color: ${colors.warning};
  font-weight: bold;
  font-size: 42px;
`;

export const Link = styled.a`
  color: ${colors.quaternary};
`;

export const ImportantBox = styled.div`
  background-color: ${colors.secondary};
  padding: 12px;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GenericImage = styled(Image)`
  && {
    margin: 32px auto 0 auto;
    max-width: 1000px;
  }
`;

export const MobileTimelineImage = styled(Image)`
  && {
    margin: 0 16px 0 16px;
    max-width: 240px;
  }
`;
