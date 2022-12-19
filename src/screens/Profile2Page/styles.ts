import styled from "styled-components/native";
import Container from "../../components/moleculars/Container";
import ProgressBar from "../../components/moleculars/ProgressBar";
import {
  Button,
  Layout,
  Avatar,
} from "@ui-kitten/components";
import {
  View,
  Image
} from "react-native";


export const ContainerProfile = styled(Container)`
  flex: 1;
`;

export const AvatarProfile = styled(Avatar)`
  border-radius: 32px;
  align-self: center;
  margin-bottom: 8px;
`;

export const Card01Profile = styled(Layout)`
  border-radius: 12px;
  margin: 0 24px;
  padding: 12px 0;
  padding-left: 11px;
  flex-direction: row;
`;

export const Card02Profile = styled(Layout)`
  border-radius: 12;
  margin-horizontal: 24;
  padding-vertical: 12;
  padding-left: 11;
  flex-direction: row;
  marginTop: 16;
  marginBottom: 160;
`;

export const ProgressBarProfile = styled(ProgressBar)`
  height: 8px;
`;

export const TextCardProfile = styled(View)`
  margin-left: 16px;
  justify-content: space-between;
`;

export const FlexRowProfile = styled(Layout)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemProfile = styled(View)`
  marginVertical: 22;
`;

export const LayoutItemProfile = styled(Layout)`
  border-radius: 12px;
  paddingHorizontal: 32px;
  marginTop: 16px;
  margin-horizontal: 24px;
`;

export const AchieveProfile = styled(View)`
  margin-top: 44px;
  padding: 0 24px;
  margin-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonProfile = styled(Button)`
  width: 64px;
  height: 64px;
`;

export const ImgCardProfile = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
