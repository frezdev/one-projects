import { ReactNode } from 'react';
import styled from 'styled-components';

interface NavItemTypes {
  children: ReactNode
  iconActive: string
  iconInactive: string
  isActive?: boolean
}

export function NavItem({ children, iconActive, iconInactive, isActive }: NavItemTypes) {

  const currentIcon = isActive ? iconActive : iconInactive;
  return (
    <Container>
      <a href=''>
        <img src={currentIcon} alt="" />
        {children}
      </a>
    </Container>
  )
}

const Container = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 8px 10px;
      border-radius: 6px;
      width: 100%;
      &:hover {
        background-color: #c98cf166;
      }
    }
`