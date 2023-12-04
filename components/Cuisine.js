import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, FlatList } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Cuisine = ({ onClose, onCuisineSelect }) => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const handlePress = (cuisine) => {
    setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine);
    onCuisineSelect(selectedCuisine === cuisine ? null : cuisine);
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={[
        styles.button,
        getButtonStyles(item),
      ]}
      onPress={() => handlePress(item)}
    >
      <View style={styles.buttonInner}>
        <Text style={[styles.cuisineText, getTextStyles(item)]}>
          {item}
        </Text>
      </View>
    </Pressable>
  );

  const getButtonStyles = (cuisine) => ({
    backgroundColor: selectedCuisine === cuisine ? "#FF4317" : "transparent",
    borderColor: selectedCuisine === cuisine ? "transparent" : "#FF4317",
  });

  const getTextStyles = (cuisine) => ({
    color: selectedCuisine === cuisine ? "#FFF" : "#FF4317",
  });

  const cuisines = ["Filipino", "Chinese", "Spanish", "French", "American", "Japanese"];

  return (
    <View style={styles.cuisine}>
      <View style={styles.rectangleParent}>
        <Pressable
          style={styles.cancelButton}
          onPress={onClose}
        >
          <Image
            style={styles.cancel1Icon}
            resizeMode="cover"
            source={require("../assets/cancel-1.png")}
          />
        </Pressable>
        <FlatList
          data={cuisines}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={2}
          columnWrapperStyle={styles.columnContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cuisine: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    marginVertical: 5,
    height: 40,
    width: "48%",
  },
  buttonInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cuisineText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    width: "95%",
    height: "auto",
    position: "absolute",
    top: 100,
    borderRadius: Border.br_3xs,
    borderTopWidth: 40, // Add a top border
    borderColor: Color.colorWhitesmoke, // Specify the border color
    backgroundColor: Color.colorWhitesmoke,
  },
  columnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cancelButton: {
    position: "absolute",
    top: -40,
    right: 15,
    padding: 10,
  },
  cancel1Icon: {
    width: 24,
    height: 24,
  },
});

export default Cuisine;
