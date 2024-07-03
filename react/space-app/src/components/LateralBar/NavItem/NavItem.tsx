import styled from 'styled-components';

interface NavItemTypes {
  children: React.ReactNode
  iconActive: string
  iconInactive: string
  href: string
}

export function NavItem({ children, iconActive, iconInactive, href }: NavItemTypes) {

  const isActive = window.location.pathname === href

  const currentIcon = isActive ? iconActive : iconInactive;
  return (
    <Container $isActive={isActive}>
      <a href={href}>
        <img src={currentIcon} />
        {children}
      </a>
    </Container>
  )
}

interface ContainerProps {
  $isActive?: boolean
}

const Container = styled.li<ContainerProps>`
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
      border-radius: 1.2rem;
      width: 100%;
      background: ${props => props.$isActive ? '#c98cf177' : 'transparent'};

      &:hover {
        background-color: #c98cf166;
      }
    }
`