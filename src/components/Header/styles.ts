import styled from "styled-components";
import { Dropdown, Button, Input } from 'antd';



export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 20px 30px;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #e6e6e6;
`;

export const Left = styled.div``;

export const Image = styled.img`
  width: 150px;
`;

export const DropdownComponent = styled(Dropdown)`
   margin-left: 30px;
   cursor: pointer;
`;



export const InputComponent = styled(Input)`
  width: 300px;
  margin-left: 30px;
  border-radius: 12px;
  transition: none;

  &:hover {
    border: 1px solid #d9d9d9 !important;
  }

  &:focus {
    border: 1px solid #d9d9d9 !important;
    box-shadow: none !important;
    outline: none !important;
    z-index: 0;
  }
`;

export const Right = styled.div``;

export const ButtonComponent = styled(Button)`
  background: #fff;
  color: #000;
  border-color: #000;
  font-weight: bold;
  border-radius: 2px;

  &:hover {
    background: #000;
    color: #fff;
  }

  &:focus {
    background: #000;
  }
`;

