import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const GettingStarted1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted1}>
      <View style={[styles.gettingStarted1Child, styles.maskPosition]} />
      <Image
        style={[styles.image29Icon, styles.maskPosition]}
        contentFit="cover"
        source={require("../assets/image-291.png")}
      />
      <View style={[styles.image, styles.maskPosition]}>
        <View style={[styles.screenParent, styles.iphoneIconLayout]}>
          <Image
            style={styles.screenIcon}
            contentFit="cover"
            source={require("../assets/screen1.png")}
          />
          <Image
            style={[styles.iphoneIcon, styles.iphoneIconLayout]}
            contentFit="cover"
            source={require("../assets/iphone.png")}
          />
        </View>
        <LinearGradient
          style={styles.overlay}
          locations={[0, 1]}
          colors={["rgba(251, 188, 5, 0)", "#fbbc05"]}
        />
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <Image
        style={styles.gettingStarted1Item}
        contentFit="cover"
        source={require("../assets/frame-49.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("GettingStarted2")}
      >
        <Text style={styles.title}>Get Started</Text>
      </Pressable>
      <Text style={[styles.lookingForA, styles.buttonLayout]}>
        Looking for a Place to Eat?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maskPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iphoneIconLayout: {
    height: 486,
    width: 243,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    width: 328,
    position: "absolute",
  },
  gettingStarted1Child: {
    backgroundColor: "#fbbc05",
    height: 504,
    top: 0,
    width: 375,
  },
  image29Icon: {
    height: 470,
    top: 0,
    width: 375,
  },
  screenIcon: {
    top: 13,
    left: 16,
    width: 212,
    height: 458,
    position: "absolute",
    overflow: "hidden",
  },
  iphoneIcon: {
    left: 0,
    width: 243,
  },
  screenParent: {
    left: 66,
  },
  overlay: {
    top: 183,
    left: 18,
    width: 339,
    height: 153,
    backgroundColor: "transparent",
    position: "absolute",
  },
  mask: {
    top: 593,
    height: 274,
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
  image: {
    top: 151,
    height: 593,
  },
  gettingStarted1Item: {
    top: 731,
    left: 173,
    width: 28,
    height: 10,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightColorBaseTertiaryLight,
    textAlign: "center",
  },
  button: {
    top: 646,
    left: 24,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorOrangered,
    shadowColor: "rgba(190, 120, 103, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
  lookingForA: {
    top: 502,
    left: 23,
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.emText,
    textAlign: "left",
  },
  gettingStarted1: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default GettingStarted1;
