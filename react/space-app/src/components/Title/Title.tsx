import styled from "styled-components";

interface TitleProps {
  $align?: "left" | "center" | "right"
  $color?: `#${string}`
  $size?: `2rem` | '2.5rem' | `3.2rem` | `4rem`
}
export const Title = styled.h2<TitleProps>`
  color: ${({ $color }) => $color ? $color : '#fff'};
  text-wrap: balance;
  text-shadow: 2px 2px 5px #1d0e27;
  font-size: ${({ $size }) => $size ? $size : '2rem'};
  width: 100%;
  text-align: ${({ $align }) => $align ? $align : 'left'};
`