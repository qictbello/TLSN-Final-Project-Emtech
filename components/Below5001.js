import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Below500 = () => {
  return (
    <View style={styles.below500}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={styles.below5001}>
          <View style={[styles.below500Child, styles.below500Position]} />
          <Text style={[styles.below500php, styles.below500phpTypo]}>
            Below 500php
          </Text>
        </View>
      </View>
      <View style={[styles.property1clicked, styles.property1defaultLayout]}>
        <View style={styles.below5001}>
          <View style={[styles.below500Item, styles.below500Position]} />
          <Text style={[styles.below500php1, styles.below500phpTypo]}>
            Below 500php
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 40,
    width: 114,
    left: 20,
    position: "absolute",
  },
  below500Position: {
    borderRadius: Border.br_mini,
    bottom: "12.5%",
    top: "15%",
    height: "72.5%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  below500phpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_xs,
    left: "13.16%",
    top: "0%",
    position: "absolute",
  },
  below500Child: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  below500php: {
    color: Color.colorOrangered,
  },
  below5001: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  property1default: {
    top: 20,
  },
  below500Item: {
    backgroundColor: Color.colorOrangered,
  },
  below500php1: {
    color: Color.lightColorBaseTertiaryLight,
  },
  property1clicked: {
    top: 80,
  },
  below500: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 154,
    height: 200,
    overflow: "hidden",
  },
});

export default Below500;
