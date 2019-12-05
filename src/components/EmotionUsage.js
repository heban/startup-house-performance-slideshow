import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import styled from '@emotion/styled/macro';

const Box = styled.div`
  margin: 16px 0;
`;

const ParagraphBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 32px 0;
`;

const Paragraph = styled.p`
  margin: 0 24px 0 0;
  font-size: 14px;
  text-align: left;
  position: relative;
  padding: 10px 0 10px 32px;

  &:before {
    position: absolute;
    top: 7px;
    left: 0;
    width: 20px;
    height: 20px;
    content: '';
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

const LABELS = [
  { title: 'Użyliby go ponownie', color: '#CC5E84' },
  { title: 'Używali i już nie chcieliby ponownie', color: '#ffe6a9' },
  { title: 'Słyszeli o nim i chcieliby się go nauczyć', color: '#fff' },
  { title: 'Słyszeli o nim, ale nie są zainteresowani', color: '#d4d4d4' },
  { title: 'Nigdy o nim nie słyszeli', color: '#666' },
];

export default function StyledUsage() {
  return (
    <Box>
      <ParagraphBox>
        {LABELS.map(label => (
          <Paragraph key={label.title} color={label.color}>{label.title}</Paragraph>
        ))}
      </ParagraphBox>
      <PieChart
        data={[
          { title: LABELS[0].title, value: 6.5, color: LABELS[0].color },
          { title: LABELS[1].title, value: 1.1, color: LABELS[1].color },
          { title: LABELS[2].title, value: 10.9, color: LABELS[2].color },
          { title: LABELS[3].title, value: 8.4, color: LABELS[3].color },
          { title: LABELS[4].title, value: 72.1, color: LABELS[4].color },
        ]}
        style={{height: '400px'}}
        animate
        label={({ data, dataIndex }) =>
          Math.round(data[dataIndex].percentage) + '%'
        }
        labelStyle={{
          fontSize: '6px',
          fontFamily: 'sans-serif',
          fill: '#214172'
        }}
      />
    </Box>
  );
};
