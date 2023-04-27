import styled from 'styled-components';

import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

function Emojis() {
  return (
    <div className="col-7">
      <Button>< BsEmojiSmile /></Button>
    </div>
  );
}

export default Emojis;

const Button = styled.button`
  background-color: #0077cc;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.2s;
`;


