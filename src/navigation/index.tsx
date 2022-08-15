import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import CausesPage from "../screens/CausesPage";
import GivingsPage from "../screens/GivingsPage";
import ProfilePage from "../screens/ProfilePage";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>() as any;

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>() as any;

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="CausesPage"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="CausesPage"
        component={CausesPage}
        options={{
          title: "Causes",
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon name="heart-o" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="GivingsPage"
        component={GivingsPage}
        options={{
          title: "Givings",
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon name="gift" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon name="code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
