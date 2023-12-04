import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import { Image } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const AdvancedRadius = ({ onClose, onApply }) => {
  const [distance, setDistance] = useState(1);

  const handleSliderChange = (value) => {
    setDistance(value);
  };

  const handleApplyPress = () => {
    onApply(distance);
    onClose();
  };

  return (
    <View style={styles.advancedRadius}>
      <View style={styles.advancedRadius1}>
        <View style={styles.advancedRadiusChild} />
        <Text style={[styles.customLocalRadius, styles.kmTypo]}>
          Custom local radius
        </Text>
        <Text style={[styles.km, styles.kmTypo]}>{distance}km</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          value={distance}
          step={1}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#FF4317"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#FF4317"
        />
        <Pressable style={styles.button} onPress={handleApplyPress}>
          <Text style={styles.title}>Apply</Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent, styles.component1ChildPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.news, styles.newsTypo]}>Nearby</Text>
          <Image
            style={[styles.nearbyIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/nearby.png")}
          />
        </View>
      </View>
      <View style={[styles.orderParent, styles.groupPosition]}>
        <Text style={[styles.order, styles.newsTypo]}>Budget</Text>
        <Image
          style={[styles.budgetIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/budget1.png")}
        />
      </View>
      <View style={styles.advancedParent}>
        <Image
          style={[styles.advancedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/advanced1.png")}
        />
        <Text style={[styles.grocery, styles.newsTypo]}>Advanced</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kmTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    position: "absolute",
  },
  topPosition1: {
    left: "0%",
    bottom: "32%",
    top: "28%",
    height: "40%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  topPosition: {
    right: "92.04%",
    width: "7.96%",
  },
  iconLayout1: {
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  component1ChildPosition: {
    bottom: "0%",
    left: "0%",
  },
  groupPosition: {
    top: "50%",
    width: "8.27%",
    position: "absolute",
  },
  newsTypo: {
    height: 11,
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    fontSize: 9,
    top: "50%",
    left: "0%",
    width: "100%",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: 25,
    height: 25,
    top: 0,
    position: "absolute",
  },
  advancedRadiusChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    height: 160,
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  customLocalRadius: {
    top: 7,
    left: 7,
    fontSize: FontSize.size_xl,
    width: 202,
    height: 32,
  },
  km: {
    top: 45,
    left: 326,
    fontSize: 15,
    width: 43,
    height: 38,
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
    top: 100,
    left: 19,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(190, 120, 103, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 339,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorOrangered,
    position: "absolute",
  },
  bottom: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
    right: "0%",
    width: "100%",
  },
  top: {
    left: "0%",
    bottom: "32%",
    top: "28%",
    height: "40%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorOrangered,
  },
  component1Child: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    right: "92.04%",
    width: "7.96%",
  },
  component1: {
    top: 52,
    left: 6,
    width: 314,
    height: 25,
    position: "absolute",
  },
  advancedRadius1: {
    height: 160,
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  rectangleIcon: {
    height: "110.53%",
    width: "102.13%",
    top: "-5.26%",
    right: "-1.07%",
    bottom: "-5.26%",
    left: "-1.07%",
  },
  news: {
    marginTop: 6.5,
    color: Color.colorGray,
  },
  nearbyIcon: {
    height: "66.29%",
    width: "64.19%",
    right: "19.68%",
    bottom: "33.71%",
    left: "16.13%",
    top: "0%",
    overflow: "hidden",
  },
  group: {
    marginTop: -23,
    right: "45.6%",
    left: "46.13%",
    height: 35,
  },
  rectangleParent: {
    height: "31.67%",
    top: "68.33%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  order: {
    marginTop: 7,
    color: Color.gray4,
  },
  budgetIcon: {
    left: 3,
    opacity: 0.25,
  },
  orderParent: {
    marginTop: 59,
    right: "13.87%",
    left: "77.87%",
    height: 36,
  },
  advancedIcon: {
    left: 8,
  },
  grocery: {
    marginTop: 7.5,
    color: Color.colorOrangered,
  },
  advancedParent: {
    top: 177,
    left: 41,
    width: 42,
    height: 37,
    position: "absolute",
  },
  advancedRadius: {
    height: 240,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 375,
    justifyContent: "flex-end",
  },
  slider: {
    width: 315,
    height: 10,
    marginTop: 60,
    left: 10,
  },
  button: {
    top: 100,
    left: 19,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(190, 120, 103, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 339,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorOrangered,
    position: "absolute",
  },
});

export default AdvancedRadius;