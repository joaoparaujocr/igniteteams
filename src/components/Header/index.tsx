import { BackButon, BackIcon, Logo, ViewHeader } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: Props) {
  return (
    <ViewHeader>
      {showBackButton && (
        <BackButon>
          <BackIcon />
        </BackButon>
      )}

      <Logo source={logoImg} />
    </ViewHeader>
  );
}
