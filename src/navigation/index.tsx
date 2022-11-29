import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, ColorSchemeName } from "react-native";
import DonateModal from "../screens/CausesPage/DonateModal";
import CausesPage from "../screens/CausesPage";
import GivingsPage from "../screens/GivingsPage";
import ProfilePage from "../screens/ProfilePage";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import CurrentUserProvider from "../contexts/currentUserContext";
import { RootSiblingParent } from "react-native-root-siblings";
import ImpactPage from "../screens/ImpactPage";
import CustomHeader from "./CustomHeader";
import CausesIconOn from "./assets/CausesIconOn";
import CausesIconOff from "./assets/CausesIconOff";
import GivingIconOn from "./assets/GivingIconOn";
import GivingIconOff from "./assets/GivingIconOff";
import ImpactIconOn from "./assets/ImpactIconOn";
import ImpactIconOff from "./assets/ImpactIconOff";
import ProfileIconOn from "./assets/ProfileIconOn";
import ProfileIconOff from "./assets/ProfileIconOff";
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
      <Stack.Group
        screenOptions={({ navigation }: any) => ({
          presentation: "modal",
          title: "Donate",
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Close"
              color={theme.colors.ribonBlue}
            />
          ),
        })}
      >
        <Stack.Screen name="DonateModal" component={DonateModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>() as any;

function BottomTabNavigator() {
  const activeColor = theme.colors.ribonBlue;

  return (
    <BottomTab.Navigator
      initialRouteName="CausesPage"
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        headerTitle: () => <CustomHeader />,
      }}
      headerShown={false}
    >
      <BottomTab.Screen
        name="CausesPage"
        component={CausesPage}
        options={{
          title: "Causes",
          tabBarIcon: ({ color }: any) =>
            color === activeColor ? <CausesIconOn /> : <CausesIconOff />,
        }}
      />
      <BottomTab.Screen
        name="GivingsPage"
        component={GivingsPage}
        options={{
          title: "Giving",
          tabBarIcon: ({ color }: any) =>
            color === activeColor ? <GivingIconOn /> : <GivingIconOff />,
        }}
      />
      <BottomTab.Screen
        name="ImpactPage"
        component={ImpactPage}
        options={{
          title: "Impact",
          tabBarIcon: ({ color }: any) =>
            color === activeColor ? <ImpactIconOn /> : <ImpactIconOff />,
        }}
      />
      <BottomTab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: any) =>
            color === activeColor ? <ProfileIconOn /> : <ProfileIconOff />,
        }}
      />
    </BottomTab.Navigator>
  );
}
