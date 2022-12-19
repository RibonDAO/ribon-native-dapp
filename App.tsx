import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import * as eva from "@eva-design/eva";
import { ThemeProvider } from "styled-components/native";
import { default as darkTheme } from "./src/constants/theme/dark.json";
import { default as lightTheme } from "./src/constants/theme/light.json";
import { default as customTheme } from "./src/constants/theme/appTheme.json";
import { default as customMapping } from "./src/constants/theme/mapping.json";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AssetIconsPack from "./src/assets/AssetIconsPack";
import theme1 from "./src/styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeContext from "./ThemeContext";
import { useFonts } from "expo-font";

export default function App() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    "Gambarino-Regular": require("./src/assets/fonts/Gambarino-Regular.ttf"),
  });

  React.useEffect(() => {
    AsyncStorage.getItem("theme").then((value) => {
      if (value === "light" || value === "dark") setTheme(value);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    AsyncStorage.setItem("theme", nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme1}>
              <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
              <ApplicationProvider
                {...eva}
                theme={
                  theme === "light"
                    ? { ...eva.light, ...customTheme, ...lightTheme }
                    : { ...eva.dark, ...customTheme, ...darkTheme }
                }
                /* @ts-ignore */
                customMapping={customMapping}
              >
                <Navigation colorScheme={colorScheme} />
                <StatusBar style="dark" />
            </ApplicationProvider>
            </ThemeProvider>
          </ThemeContext.Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}
