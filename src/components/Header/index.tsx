import { useNavigation } from "@react-navigation/native";
import { BackButon, BackIcon, Logo, ViewHeader } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("groups");
  };

  return (
    <ViewHeader>
      {showBackButton && (
        <BackButon onPress={handleGoBack}>
          <BackIcon />
        </BackButon>
      )}

      <Logo source={logoImg} />
    </ViewHeader>
  );
}
