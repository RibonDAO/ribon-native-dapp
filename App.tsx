import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientComponent } from "@ribon.io/shared/dist/hooks";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientComponent>
          <ThemeProvider theme={theme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style="dark" />
          </ThemeProvider>
        </QueryClientComponent>
      </SafeAreaProvider>
    );
  }
}
