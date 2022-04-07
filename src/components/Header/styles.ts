import styled from "styled-components";
import { Dropdown, Button } from 'antd';


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

export const Input = styled.input`
  width: 300px;
  margin-left: 30px;
  border: 1px solid black;
  border-radius: 12px;
  padding: 3px 10px;
  background: #eee;

  &::selection {
    color: #000;
    background: #000;
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
`;