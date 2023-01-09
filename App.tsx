import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}
