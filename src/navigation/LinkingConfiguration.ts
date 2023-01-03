import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          CausesPage: {
            screens: {
              CausesPage: "causes",
              DonationDonePage: "DonationDonePage",
            },
          },
          GivingsPage: {
            screens: {
              GivingsPage: "givings",
            },
          },
          ProfilePage: {
            screens: {
              ProfilePage: "profile",
            },
          },
        },
      },
      DonateModal: "DonateModal",
      NotFound: "*",
    },
  },
};

export default linking;
