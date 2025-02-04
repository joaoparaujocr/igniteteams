import { BackButton, BackIcon, Container, Logo } from "./styles";
import logo from '@assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  )
}