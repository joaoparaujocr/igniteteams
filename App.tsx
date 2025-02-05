import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { Groups, NewGroup, Players } from "@screens/index";

export default function App() {
  const [fontsLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoader ? <>
        <Players />
      </> : <Loading />}
    </ThemeProvider>
  )
}