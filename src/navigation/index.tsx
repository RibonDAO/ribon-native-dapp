import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image } from "react-native";
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
import GivingIcon from "../assets/icons/giving-icon.png";
import CausesIcon from "../assets/icons/causes-icon.png";
import ImpactIcon from "../assets/icons/impact-icon.png";
import UserIcon from "../assets/icons/user-icon.png";
import CustomHeader from "./CustomHeader";
import theme from "styles/theme";

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
        tabBarActiveTintColor: theme.colors.ribonBlue,
        headerTitle: () => <CustomHeader />,
      }}
      headerShown={false}
    >
      <BottomTab.Screen
        name="CausesPage"
        component={CausesPage}
        options={{
          title: "Causes",
          tabBarIcon: ({ color }: any) => (
            <Image source={CausesIcon} style={{ tintColor: color }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="GivingsPage"
        component={GivingsPage}
        options={{
          title: "Giving",
          tabBarIcon: ({ color }: any) => (
            <Image source={GivingIcon} style={{ tintColor: color }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ImpactPage"
        component={ImpactPage}
        options={{
          title: "Impact",
          tabBarIcon: ({ color }: any) => (
            <Image source={ImpactIcon} style={{ tintColor: color }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: any) => (
            <Image source={UserIcon} style={{ tintColor: color }} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
