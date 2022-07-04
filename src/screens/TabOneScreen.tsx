import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import CardStories from "components/moleculars/CardStories";

const post = {
  id: 1,
  active: false,
  background_image:
    "https://api.ribon.io/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajRIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce97096849005dd08521325ac648a1d3e30b0446/Growth_App_26.png",
  cause_text: null,
  description:
    "Dentre as iniciativas do Ecotece está o LABMODA+, um curso de moda gratuito para jovens, que existe graças à sua doação.",
  ngo: {
    id: 40,
    activated: false,
    auto_creation_available: false,
    background_image_url: null,
    card_background_image:
      "https://api.ribon.io/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczBHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0107569257a36627f00dded0455a86f939c269d1/Donation%20done%20image%20URL%20-%20CAUSA%20(1).jpeg",
    cause: "Educação",
    color: "main",
    color_code: "#00CDB4",
    colorful_icon_url: null,
    created_at: "2022-05-12 17:36:34 -0300",
    default_required_ribons: null,
    donated_days: 0,
    donated_ribons: 0,
    donation_done_image: "",
    donation_done_image_url: null,
    donation_impact_message:
      "$IMPACT 1 hora de capacitação para mulheres na cadeia da moda ética",
    en_donation_impact_message: "$IMPACT full days of complete class",
    has_impact_days: true,
    icon_url: null,
    impact_description:
      "1 hora de capacitação para mulheres na cadeia da moda ética",
    impact_icon_background_color: null,
    impact_icon_url: null,
    link: "http://ecotece.org.br/",
    logo_url:
      "https://storage.googleapis.com/business-ribon/Ongs/Ecotece/Logo%20URL%20-%20CAUSA-1.png",
    name: "Ecotece :)",
    next_goal_message:
      "Doe mais $MISSING_RIBONS para fornecer 1 hora de capacitação para mulheres na cadeia da moda ética",
    places: null,
    position_order: 2,
    referral_message:
      "Eu acabei de ajudar uma pessoa fazendo uma doação sem gastar nada através do app Ribon! Bom demais para ser verdade né? Saiba mais e ajude também.",
    reward_rule_id: null,
    ribons_amount_to_one_impact_unit: 1000,
    share_image: "",
    short_description:
      "hora(s) de capacitação para mulheres na cadeia da moda ética",
    slider_images: [],
    sponsored_brand: null,
    updated_at: "2022-06-28 15:10:45 -0300",
    white_logo:
      "https://api.ribon.io/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb0cc684799e53ccb3e36a7af8742420f6be4aa6/whiteLogo_ecotece.png",
    white_logo_url:
      "https://storage.googleapis.com/business-ribon/Ongs/Ecotece/White%20Logo%20URL%20-%20CAUSA%20(1).png",
    will_donate_image:
      "https://api.ribon.io/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2d44fea7f1b01046bb02da2fed705d37de722974/Donation%20done%20image%20URL%20-%20CAUSA%20(1).jpeg",
    will_donate_image_url: null,
  },
  title: "Costurando o caminho",
};
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const data = [
    {
      userId: post.ngo.id,
      userImage: post.ngo.logo_url,
      userName: post.ngo.name,
      stories: [
        {
          storyId: post.id,
          storyImage: post.background_image,
          swipeText: post.ngo.name,
          onPress: () => console.log("story 1 swiped"),
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <CardStories userStories={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
