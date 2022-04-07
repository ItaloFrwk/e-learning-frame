import { Menu } from 'antd';

import {
  Container,
  Left,
  Right,
  Image,
  DropdownComponent,
  Input,
  ButtonComponent } from './styles';

import logo from '../../assets/img/logoframe.png';


const Header = () => {
  const { SubMenu } = Menu;

  const menu = (
    <Menu>
      <SubMenu title="Desenvolvimento">
      <SubMenu title="Front-End">
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          HTML
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          CSS
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Javascript
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          React
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Typescript
        </a>
      </Menu.Item>
      </SubMenu>

      <SubMenu title="Back-End">
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          .NET
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          NodeJS
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          GraphQL
        </a>
      </Menu.Item>
      </SubMenu>
      
      </SubMenu>

      <SubMenu title="Design">
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Figma
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          UX/UI
        </a>
      </Menu.Item>
      </SubMenu>

      <SubMenu title="Data Science">
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Python
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Machine Learning
        </a>
      </Menu.Item>
      </SubMenu>
    </Menu>
  ); 

  return(
    <Container>
      <Left>
        <Image src={logo} alt="Framework Logo" />
        <DropdownComponent overlay={menu} placement="bottomLeft">
         <span>Categorias</span>
        </DropdownComponent>
        <Input placeholder='Pesquisar curso...' />
      </Left>

      <Right>
        <ButtonComponent type='primary'>Fazer login</ButtonComponent>
      </Right>
    </Container>
  );
}

export default Header;