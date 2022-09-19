import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";
import DragItem from "components/moleculars/Draggable";
import { showToast } from "../../lib/Toast";

export default class GivingsPage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Faça sua doação!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <DragItem
            onDropAreaCallback={() => {
              showToast("doou");
            }}
            imageUrl="https://www.pngall.com/wp-content/uploads/4/Dry-Dog-Food-PNG-Free-Download.png"
          />
          <DragItem
            onDropAreaCallback={() => {
              showToast("doou");
            }}
            imageUrl="https://www.pngall.com/wp-content/uploads/4/Dry-Dog-Food-PNG-Free-Download.png"
          />
        </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ballContainer: {
    height: 200,
  },
  circle: {
    backgroundColor: "skyblue",
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
