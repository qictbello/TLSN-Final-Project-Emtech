import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Cuisine = () => {
  return (
    <View style={styles.cuisine}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.cuisineType}>Cuisine Type</Text>
        <Pressable style={[styles.buttonFilipino, styles.buttonLayout]}>
          <View style={styles.buttonFilipinoChild} />
          <Text style={[styles.filipino, styles.chineseTypo]}>Filipino</Text>
        </Pressable>
        <Pressable style={[styles.buttonChinese, styles.buttonLayout]}>
          <View style={styles.buttonFilipinoChild} />
          <Text style={[styles.chinese, styles.chineseTypo]}>Chinese</Text>
        </Pressable>
        <Pressable style={[styles.buttonSpanish, styles.buttonPosition1]}>
          <View style={styles.buttonFilipinoChild} />
          <Text style={[styles.chinese, styles.chineseTypo]}>Spanish</Text>
        </Pressable>
        <Pressable style={[styles.buttonFrench, styles.buttonPosition]}>
          <View style={styles.buttonFilipinoChild} />
          <Text style={[styles.filipino, styles.chineseTypo]}>French</Text>
        </Pressable>
        <Pressable style={[styles.buttonAmerican, styles.buttonPosition]}>
          <View style={styles.buttonFilipinoChild} />
          <Text style={[styles.american, styles.chineseTypo]}>American</Text>
        </Pressable>
        <Pressable style={[styles.buttonJapanese, styles.buttonPosition1]}>
          <View style={styles.buttonFilipinoChild} />
          <Text style={[styles.american, styles.chineseTypo]}>Japanese</Text>
        </Pressable>
      </View>
      <Image
        style={styles.cancel1Icon}
        contentFit="cover"
        source={require("../assets/cancel-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 203,
    width: 375,
    position: "absolute",
  },
  buttonLayout: {
    height: 40,
    width: 129,
    left: 27,
    position: "absolute",
  },
  chineseTypo: {
    color: Color.colorOrangered,
    fontSize: FontSize.size_xs,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    position: "absolute",
  },
  buttonPosition1: {
    left: 214,
    height: 40,
    width: 129,
    position: "absolute",
  },
  buttonPosition: {
    top: 144,
    height: 40,
    width: 129,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
  },
  cuisineType: {
    top: 1,
    left: 9,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    position: "absolute",
  },
  buttonFilipinoChild: {
    height: "77.5%",
    top: "10%",
    right: "0%",
    bottom: "12.5%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightColorBaseTertiaryLight,
    position: "absolute",
    width: "100%",
  },
  filipino: {
    left: "34.11%",
  },
  buttonFilipino: {
    top: 49,
  },
  chinese: {
    left: "31.78%",
  },
  buttonChinese: {
    top: 96,
  },
  buttonSpanish: {
    top: 96,
  },
  buttonFrench: {
    left: 27,
    top: 144,
  },
  american: {
    left: "28.68%",
  },
  buttonAmerican: {
    left: 216,
  },
  buttonJapanese: {
    top: 49,
  },
  rectangleParent: {
    top: 102,
  },
  cancel1Icon: {
    top: 111,
    left: 333,
    width: 24,
    height: 24,
    position: "absolute",
  },
  cuisine: {
    flex: 1,
    height: 236,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cuisine;
