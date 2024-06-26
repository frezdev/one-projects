import styled from "styled-components";
import { NavItem } from "./NavItem/NavItem";
import { itemsData } from './itemsData'

const Aside = styled.aside`
  grid-area: aside;
`

const List = styled.ul`
  display: grid;
  width: 220px;
  gap: 10px;
  justify-items: start;
  padding: 10px 20px;

  li {
    width: 100%;
  }
`

export function LateralBar() {
  return (
    <Aside>
      <nav>
        <List>
          {
            itemsData.map(({ iconActive, iconInactive, label }) => (
              <NavItem key={label} iconActive={iconActive} iconInactive={iconInactive}>
                {label}
              </NavItem>
            ))
          }
        </List>
      </nav>
    </Aside>
  );
}
