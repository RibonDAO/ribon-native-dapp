import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import DonateModal from "../screens/CausesPage/DonateModal";
import CausesPage from "../screens/CausesPage";
import GivingsPage from "../screens/GivingsPage";
import ProfilePage from "../screens/ProfilePage";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import CurrentUserProvider from "../contexts/currentUserContext";
import { RootSiblingParent } from "react-native-root-siblings";
import ImpactPage from "../screens/ImpactPage";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <CurrentUserProvider>
        <RootSiblingParent>
          <RootNavigator />
        </RootSiblingParent>
      </CurrentUserProvider>
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
      <Stack.Group screenOptions={{ presentation: "modal", title: "Donate" }}>
        <Stack.Screen name="DonateModal" component={DonateModal} />
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
        name="ImpactPage"
        component={ImpactPage}
        options={{
          title: "Impacts",
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
            <TabBarIcon name="user-o" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
