import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const GettingStarted2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted2}>
      <View style={[styles.gettingStarted2Child, styles.maskPosition]} />
      <Image
        style={[styles.image29Icon, styles.maskPosition]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <View style={[styles.image, styles.maskPosition]}>
        <View style={[styles.screenParent, styles.iphoneIconLayout]}>
          <Image
            style={styles.screenIcon}
            contentFit="cover"
            source={require("../assets/screen.png")}
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
          colors={["rgba(117, 204, 49, 0)", "#75cc31"]}
        />
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("LoadingScreen")}
      >
        <Text style={styles.title}>Get Started</Text>
      </Pressable>
      <View style={[styles.gettingStarted2Inner, styles.buttonFlexBox]}>
        <View style={styles.frameParent}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/frame-45.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-46.png")}
          />
        </View>
      </View>
      <Text style={[styles.findRestaurantAround, styles.buttonLayout]}>
        Find Restaurant around you fast
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
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    height: 10,
    width: 10,
    borderRadius: Border.br_5xl,
  },
  buttonLayout: {
    width: 328,
    left: 24,
  },
  gettingStarted2Child: {
    backgroundColor: "#75cc31",
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
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    width: 328,
    left: 24,
  },
  frameItem: {
    marginLeft: 10,
  },
  frameParent: {
    flexDirection: "row",
  },
  gettingStarted2Inner: {
    top: 731,
    left: 172,
  },
  findRestaurantAround: {
    top: 502,
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.emText,
    textAlign: "left",
    position: "absolute",
  },
  gettingStarted2: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightColorBaseTertiaryLight,
  },
});

export default GettingStarted2;
