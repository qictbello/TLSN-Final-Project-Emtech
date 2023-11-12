import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.component1Parent}>
      <View style={styles.component1}>
        <View style={[styles.bottomParent, styles.bottomLayout]}>
          <View style={styles.bottom} />
          <View style={[styles.top, styles.topPosition]} />
          <Image
            style={[styles.componentChild, styles.componentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-109.png")}
          />
        </View>
        <View style={[styles.bottomGroup, styles.bottomLayout]}>
          <View style={styles.bottom} />
          <View style={[styles.top1, styles.topPosition]} />
          <Image
            style={[styles.componentItem, styles.componentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-109.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomLayout: {
    height: 25,
    width: 314,
    left: 20,
    position: "absolute",
  },
  topPosition: {
    backgroundColor: Color.colorOrangered,
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "32%",
    top: "28%",
    height: "40%",
    position: "absolute",
  },
  componentLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "7.96%",
    position: "absolute",
    overflow: "hidden",
  },
  bottom: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
    borderRadius: Border.br_3xs,
    bottom: "32%",
    top: "28%",
    height: "40%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  top: {
    right: "92.04%",
    width: "7.96%",
    backgroundColor: Color.colorOrangered,
  },
  componentChild: {
    right: "92.04%",
    left: "0%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  bottomParent: {
    top: 20,
  },
  top1: {
    right: "0%",
    backgroundColor: Color.colorOrangered,
    width: "100%",
  },
  componentItem: {
    left: "92.04%",
    right: "0%",
  },
  bottomGroup: {
    top: 76,
  },
  component1: {
    top: 9,
    left: -11,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 354,
    height: 121,
    position: "absolute",
    overflow: "hidden",
  },
  component1Parent: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 139,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
