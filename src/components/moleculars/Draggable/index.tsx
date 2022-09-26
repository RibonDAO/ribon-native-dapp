import React, { useEffect, useState } from "react";
import * as S from "./styles";
import {
  Animated,
  PanResponder,
  PanResponderInstance,
  StyleSheet,
  View,
} from "react-native";

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ballContainer: {
    height: 200,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
  row: {
    flexDirection: "row",
  },
  dropZone: {
    height: 200,
    backgroundColor: "#00334d",
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export type Props = {
  imageUrl?: string;
  onDropAreaCallback: () => void;
};
function Draggable({ onDropAreaCallback, imageUrl }: Props): JSX.Element {
  const [state, setState] = useState({
    showDraggable: true,
    dropAreaValues: null,
    pan: new Animated.ValueXY(),
    opacity: new Animated.Value(1),
  });

  const [val, setVal] = useState({ x: 0, y: 0 });
  const [panResponder, setPanResponder] = useState<PanResponderInstance>();

  useEffect(() => {
    state.pan.addListener((value) => setVal(value));

    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          state.pan.setOffset({
            x: val.x,
            y: val.y,
          });
          state.pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: Animated.event([
          null,
          { dx: state.pan.x, dy: state.pan.y },
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (isDropArea(gesture)) {
            onDropAreaCallback();
            Animated.timing(state.opacity, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true,
            }).start(() =>
              setState({
                ...state,
                showDraggable: false,
              }),
            );
          }
        },
      }),
    );
  }, []);

  function isDropArea(gesture: any) {
    return gesture.moveY < 200;
  }

  function renderDraggable() {
    const panStyle = {
      transform: state.pan.getTranslateTransform(),
    };
    if (state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.Image
            {...panResponder?.panHandlers}
            style={[panStyle, styles.circle, { opacity: state.opacity }]}
            source={{ uri: imageUrl }}
          />
        </View>
      );
    }
  }

  return (
    <S.Container>
      <View style={{ width: "20%", alignItems: "center" }}>
        {renderDraggable()}
      </View>
    </S.Container>
  );
}

export default Draggable;
