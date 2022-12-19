import React, { memo } from "react";
import {
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Button,
  Layout,
} from "@ui-kitten/components";
import useLayout from "hooks/useLayout";

import Text from "components/moleculars/Text";
import Content from "components/moleculars/Content";
import { Images } from "assets/images";
import ProgressBar from "components/moleculars/ProgressBar";
import BottomBar from "./BottomBar";
import * as S from "./styles";

const Profile10 = memo(() => {
  const { height, width } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const y = React.useRef(new Animated.Value(0)).current;
  const input = [0, height * 0.005, height * 0.01, height * 0.015];
  const scale = y.interpolate({
    inputRange: input,
    outputRange: [1, 1, 0.6, 0.7],
    extrapolate: "clamp",
  });
  const transY = y.interpolate({
    inputRange: input,
    outputRange: [0, 0, -15, -18],
    extrapolate: "clamp",
  });

  const DATA_Achieve = [
    {
      id: 0,
      image: Images.baby,
      color: theme["color-radical-600"],
    },
    {
      id: 1,
      image: Images.wale,
      color: theme["color-emerald-100"],
    },
    {
      id: 2,
      image: Images.avocado,
      color: theme["color-salmon-100"],
    },
    {
      id: 3,
      image: Images.medal,
      color: theme["color-patrick-blue-100"],
    },
  ];

  const [data, setData] = React.useState(DATA_Achieve);
  return (
    <S.ContainerProfile>
      <ImageBackground
        source={Images.frame01}
        style={{ width: width, height: height }}
      >
        <Animated.View
          style={{ transform: [{ translateY: transY }, { scale: scale }] }}
        >
          <S.AvatarProfile
            size="80"
            source={Images.avatar0}
          />
        </Animated.View>

        <Content>
          <Layout level="2" style={[styles.flexRow, styles.layoutItem]}>
            <S.ItemProfile>
              <Text children="348" center category="title3" status="white" />
              <Text children="Perseverança" center category="caption1" status="snow" />
            </S.ItemProfile>
            <Layout
              style={{ backgroundColor: theme["color-basic-1300"], width: 1 }}
            />
            <S.ItemProfile>
              <Text children="195" center category="title3" status="white" />
              <Text children="Total Doações" center category="caption1" status="snow" />
            </S.ItemProfile>
            <Layout
              style={{ backgroundColor: theme["color-basic-1300"], width: 1 }}
            />
            <S.ItemProfile>
              <Text children="875" center category="title3" status="white" />
              <Text children="Rank Atual" center category="caption1" status="snow" />
            </S.ItemProfile>
          </Layout>

          <Text
            children="Minhas Conquistas"
            category="title3"
            status="white"
            marginLeft={24}
            marginTop={24}
            marginBottom={-20}
          />

          <S.AchieveProfile>
            {data.map((item, index) => {
              return (
                <Button
                  key={index}
                  accessoryRight={() => <Image source={item.image} />}
                  activeOpacity={0.7}
                  style={[{ backgroundColor: item.color }, styles.button]}
                />
              );
            })}
          </S.AchieveProfile>

          <Text
            children="Meu impacto"
            category="title3"
            status="white"
            marginLeft={24}
            marginBottom={16}
          />

          <S.Card01Profile level="4">
            <S.ImgCardProfile
              source={Images.rectangle1}
            />
            <S.TextCardProfile>
              <Text
                children="Doações todas as ONGs"
                category="headline"
                status="white"
              />
              <Text category="body" status="snow">
                Done:
                <Text category="headline" status="white" children=" 8" />
                /13
              </Text>
              <ProgressBar
                didDone={4}
                total={10}
                styleBar={styles.progressBar}
                style={styles.progressBar}
              />
            </S.TextCardProfile>
          </S.Card01Profile>

          <S.Card02Profile level="5">
            <S.ImgCardProfile
              source={Images.rectangle1}
            />
            <S.TextCardProfile>
              <Text
                children="Stories das ONGs"
                category="headline"
                status="white"
              />
              <Text category="body" status="snow">
                Done:
                <Text category="headline" status="white" children=" 8" />
                /13
              </Text>
              <S.ProgressBarProfile
                didDone={4}
                total={10}
                styleBar={styles.progressBar}
              />
            </S.TextCardProfile>
          </S.Card02Profile>
        </Content>
        <BottomBar />
      </ImageBackground>
    </S.ContainerProfile>
  );
});

export default Profile10;

const themedStyles = StyleService.create({
  progressBar: {
    height: 8,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    marginVertical: 22,
  },
  layoutItem: {
    borderRadius: 12,
    paddingHorizontal: 32,
    marginTop: 16,
    marginHorizontal: 24,
  },
  button: {
    width: 64,
    height: 64,
  },
});
