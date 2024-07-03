import styled from 'styled-components'

interface Props {
  children: React.ReactNode,
  open: boolean
}
export const ModalPhoto = ({ children, open }: Props) => {
  return (
    <Dialog open={open}>
      {children}
    </Dialog>
  )
}

const Dialog = styled.dialog`
  background: linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.486));
  display: flex;
  place-content: center;
  width: 100%;
  height: 100vh;
  inset: 0;
  position: fixed;
  align-items: center;
`