import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Budget from "../components/Budget";
import AdvancedRadius from "../components/AdvancedRadius";
import { Color, FontFamily } from "../GlobalStyles";
import Cuisine from "../components/Cuisine";

const LoadingScreen = () => {
  const [groupContainer2Visible, setGroupContainer2Visible] = useState(false);
  const [groupContainer3Visible, setGroupContainer3Visible] = useState(false);
  const [groupContainer4Visible, setGroupContainer4Visible] = useState(false);

  const openGroupContainer4 = useCallback(() => {
    setGroupContainer4Visible(true);
  }, []);

  const closeGroupContainer4 = useCallback(() => {
    setGroupContainer4Visible(false);
  }, []);

  const openGroupContainer2 = useCallback(() => {
    setGroupContainer2Visible(true);
  }, []);

  const closeGroupContainer2 = useCallback(() => {
    setGroupContainer2Visible(false);
  }, []);

  const openGroupContainer3 = useCallback(() => {
    setGroupContainer3Visible(true);
  }, []);

  const closeGroupContainer3 = useCallback(() => {
    setGroupContainer3Visible(false);
  }, []);

  return (
    <>
      <View style={styles.loadingScreen}>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle.png")}
            />
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={styles.news}>Nearby</Text>
              <Image
                style={[styles.nearbyIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/nearby1.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.orderParent, styles.groupPosition]}
            onPress={openGroupContainer2}
          >
            <Text style={[styles.order, styles.orderTypo]}>Budget</Text>
            <Image
              style={[styles.budgetIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/budget1.png")}
            />
          </Pressable>
          <Pressable
            style={styles.advancedParent}
            onPress={openGroupContainer3}
          >
            <Image
              style={[styles.advancedIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/advanced.png")}
            />
            <Text style={[styles.grocery, styles.orderTypo]}>Advanced</Text>
          </Pressable>
        </View>
        <Pressable
            onPress={openGroupContainer4}>
        <Image
          style={styles.loadingScreenChild}
          contentFit="cover"
          source={require("../assets/group-36529.png")}
        />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer4Visible}>
        <View style={styles.groupContainer4Overlay}>
          <Pressable
            onPress={closeGroupContainer4}
          >
          <Cuisine onClose={closeGroupContainer4} />
          </Pressable>
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer2Visible}>
        <View style={styles.groupContainer2Overlay}>
          <Pressable
            style={styles.groupContainer2Bg}
            onPress={closeGroupContainer2}
          />
          <Budget onClose={closeGroupContainer2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer3Visible}>
        <View style={styles.groupContainer3Overlay}>
          <Pressable
            style={styles.groupContainer3Bg}
            onPress={closeGroupContainer3}
          />
          <AdvancedRadius onClose={closeGroupContainer3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    top: "50%",
    width: "8.27%",
    marginTop: -23,
    position: "absolute",
  },
  orderTypo: {
    color: Color.gray4,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    fontSize: 9,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    height: 25,
    width: 25,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: "105.26%",
    top: "-5.26%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  news: {
    marginTop: 6.45,
    color: Color.colorOrangered,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    fontSize: 9,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  nearbyIcon: {
    height: "66.48%",
    width: "64.19%",
    right: "16.45%",
    bottom: "33.52%",
    left: "19.35%",
    top: "0%",
  },
  group: {
    right: "45.87%",
    left: "45.87%",
    height: 35,
  },
  rectangleParent: {
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer4Overlay: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  order: {
    marginTop: 7,
  },
  budgetIcon: {
    left: 3,
    opacity: 0.25,
  },
  orderParent: {
    right: "13.87%",
    left: "77.87%",
    height: 36,
  },
  groupContainer3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end", // Add this line to align at the bottom
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  advancedIcon: {
    left: 8,
  },
  grocery: {
    marginTop: 7.5,
  },
  advancedParent: {
    top: 13,
    left: 41,
    width: 42,
    height: 37,
    position: "absolute",
  },
  groupParent: {
    height: "9.36%",
    top: "90.64%",
    position: "absolute",
  },
  loadingScreenChild: {
    top: 44,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute",
  },
  loadingScreen: {
    backgroundColor: Color.lightColorBaseTertiaryLight,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoadingScreen;
