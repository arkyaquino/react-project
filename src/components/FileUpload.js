
import React from 'react';
import { ImFolderUpload} from 'react-icons/im';
import styled from 'styled-components';


function FileUpload() {
  return (
    <div className="options col-1">
       <Button><ImFolderUpload /></Button>
    </div>
  );
}

export default FileUpload;


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
