import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import CardStories from "components/moleculars/CardStories";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const data = [
    {
      userId: 1,
      userImage:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      userName: "Ahmet Çağlar Durmuş",
      stories: [
        {
          storyId: 1,
          storyImage:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          storyId: 2,
          storyImage:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
    {
      userId: 2,
      userImage:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      userName: "Test User",
      stories: [
        {
          storyId: 1,
          storyImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          storyId: 2,
          storyImage:
            "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 2 swiped"),
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
