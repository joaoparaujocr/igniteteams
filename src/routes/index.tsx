import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export default function Routes() {
  const {
    COLORS: { GRAY_600 },
  } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: GRAY_600,
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
