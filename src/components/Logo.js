import React from 'react';
import styled from '@emotion/styled/macro';

const Box = styled.div`
  display: inline-block;
  padding-top: 6px;
`;

export default function Logo() {
  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="54" viewBox="0 0 32 54">
        <defs>
          <path id="a" d="M.146.172h10.165v10.86H.146z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path stroke="#06F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.218" d="M26.606 21.062s7.532 4.79 6.313 16.104l-15.833-9.368-15.834 9.368C.033 25.852 7.565 21.062 7.565 21.062M17.086 52.874s1.79-1.775 3.829-5.473c1.65-2.994-.47-6.698-3.83-6.698-3.36 0-5.478 3.704-3.828 6.698 2.038 3.698 3.829 5.473 3.829 5.473z" />
          <path stroke="#06F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.218" d="M20.177 35.629l4.45 2.628c.93-3.265 1.66-7.098 1.957-11.524 1.272-18.925-9.498-25.612-9.498-25.612S6.316 7.808 7.587 26.733c.298 4.426 1.027 8.26 1.958 11.524l4.45-2.628" />
        </g>
      </svg>
    </Box>
  );
};
