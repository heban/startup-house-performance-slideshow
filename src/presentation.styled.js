import styled from '@emotion/styled/macro';
import { Image } from 'spectacle';

const colors = {
  primary: '#214172',
  secondary: '#fff',
  tertiary: '#CC5E84',
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

export const ImportantBox = styled.div`
  background-color: ${colors.secondary};
  padding: 12px;
`;

export const AndroidImage = styled(Image)`
  && {
    margin: 0;
    max-width: 286px;
    max-height: 455px;
    margin-left: 64px;
    margin-top: 32px;
  }
`;

export const CodeWithImage = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Bridge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${colors.secondary};

    &:nth-of-type(2) {
      position: relative;
      background-color: ${colors.tertiary};
      margin: 0 90px;
      font-weight: bold;

      &:after, &:before {
        position: absolute;
        width: 64px;
        height: 8px;
        background-color: ${colors.tertiary};
        content: '';
        bottom: 50%;
        border-radius: 15px;
        transform: translateY(50%);
      }

      &:before {
        left: -76px;
      }

      &:after {
        right: -76px;
      }
    }
  }
`;

export const ReactTrendsImage = styled(Image)`
  && {
    margin: 32px auto 0 auto;
    max-width: 1000px;
  }
`;

export const GatsbyTrendsImage = styled(Image)`
  && {
    margin: 32px auto 0 auto;
    max-width: 860px;
  }
`;

export const ReactImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReactFirstImage = styled(Image)`
  && {
    margin: 32px auto 0 auto;
    max-width: 500px;
  }
`;

export const ReactSecondImage = styled(Image)`
  && {
    margin: 32px auto 0 auto;
    max-width: 560px;
  }
`;
