import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import { useState, useEffect } from 'react';

const Budget = ({ onClose, onBudgetSelect, selectedBudgetProp }) => {

  const [selectedBudget, setSelectedBudget] = useState(null);
  const [customBudget, setCustomBudget] = useState('');

  useEffect(() => {
    setSelectedBudget(selectedBudgetProp);
  }, [selectedBudgetProp]);

  const handleBudgetSelection = (budget) => {
    setSelectedBudget(budget);
  };

  const handleApplyPress = () => {
    onBudgetSelect(selectedBudget, customBudget);
    onClose();
  };

  return (
    <View style={styles.budget}>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={[styles.rectangleParent, styles.parentPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle.png")}
          />
          <View style={[styles.group, styles.groupPosition1]}>
            <Text style={[styles.news, styles.newsTypo]}>Nearby</Text>
            <Image
              style={[styles.nearbyIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/nearby.png")}
            />
          </View>
        </View>
        <View style={[styles.orderParent, styles.groupPosition1]}>
          <Text style={styles.order}>Budget</Text>
          <Image
            style={[styles.budgetIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/budget.png")}
          />
        </View>
        <View style={styles.advancedParent}>
          <Image
            style={[styles.advancedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/advanced.png")}
          />
          <Text style={[styles.grocery, styles.newsTypo]}>Advanced</Text>
        </View>
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.spendingLimit}>Spending Limit</Text>
                <View style={styles.spendContainer}>
                  <TouchableOpacity
                    style={[styles.bgtButton, selectedBudget === 'noFilter' && styles.bgtSelected]}
                    onPress={() => handleBudgetSelection('noFilter')}>
                    <Text style={[{color: '#ff4317'}, selectedBudget === 'noFilter' && {color: '#ffffff'}]}>No Filter</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.bgtButton, selectedBudget === 'low' && styles.bgtSelected]}
                    onPress={() => handleBudgetSelection('low')}>
                    <Text style={[{color: '#ff4317'}, selectedBudget === 'low' && {color: '#ffffff'}]}>Below 500php</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.bgtButton, selectedBudget === 'medium' && styles.bgtSelected]}
                    onPress={() => handleBudgetSelection('medium')}>
                    <Text style={[{color: '#ff4317'}, selectedBudget === 'medium' && {color: '#ffffff'}]}>500 - 1,000php</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.bgtButton, selectedBudget === 'high' && styles.bgtSelected]}
                    onPress={() => handleBudgetSelection('high')}>
                    <Text style={[{color: '#ff4317'}, selectedBudget === 'high' && {color: '#ffffff'}]}>1,000 - 2,000php</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.bgtButton, selectedBudget === 'super' && styles.bgtSelected]}
                    onPress={() => handleBudgetSelection('super')}>
                    <Text style={[{color: '#ff4317'}, selectedBudget === 'super' && {color: '#ffffff'}]}>Above 2,000php</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.bgtButton, selectedBudget === 'custom' && styles.bgtSelected]}
                    onPress={() => handleBudgetSelection('custom')}>
                    <Text style={[{color: '#ff4317'}, selectedBudget === 'custom' && {color: '#ffffff'}]}>Custom Budget</Text>
                  </TouchableOpacity>
                </View>

              {selectedBudget === 'custom' && (
                <TextInput
                  style={styles.customBudgetInput}
                  placeholder="Enter custom budget"
                  value={customBudget}
                  onChangeText={(text) => setCustomBudget(text)}
                />
              )}
              <Pressable
                style={[styles.button, styles.applyBtnClose]}
                onPress={handleApplyPress}>
                <Text style={styles.title}>Apply</Text>
              </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconLayout1: {
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupPosition1: {
    top: "50%",
    width: "8.27%",
    marginTop: -23,
    position: "absolute",
  },
  newsTypo: {
    height: 11,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    fontSize: 9,
    top: "50%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 203,
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
    padding: 10,
  },
  rectangleLayout: {
    height: 40,
    width: 114,
  },
  groupItemLayout: {
    height: 29,
    backgroundColor: Color.lightColorBaseTertiaryLight,
    borderRadius: Border.br_mini,
    width: 114,
    position: "absolute",
  },
  phpTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorOrangered,
    textAlign: "left",
  },
  groupViewPosition: {
    top: 95,
    position: "absolute",
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
  },
  nearbyIcon: {
    height: "66.29%",
    width: "64.19%",
    right: "19.68%",
    bottom: "33.71%",
    left: "16.13%",
    top: "0%",
  },
  group: {
    right: "45.6%",
    left: "46.13%",
    height: 35,
  },
  rectangleParent: {
    height: "100%",
    top: "0%",
  },
  order: {
    marginTop: 7,
    color: Color.colorOrangered,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.meeraInimaiRegular,
    letterSpacing: 0,
    fontSize: 9,
    top: "50%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  budgetIcon: {
    left: 3,
  },
  orderParent: {
    right: "13.87%",
    left: "77.87%",
    height: 36,
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
    height: "26.95%",
    top: "73.05%",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
  },
  spendingLimit: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
    
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorOrangered,
    shadowColor: "rgba(190, 120, 103, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: "100%",
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
  groupItem: {
    top: 6,
    left: 0,
    height: 29,
  },
  php: {
    left: 10,
    top: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleContainer: {
    left: 254,
    top: 51,
    width: 114,
    position: "absolute",
  },
  groupView: {
    left: 63,
    height: 40,
    width: 114,
  },
  rectangleView: {
    top: 101,
    left: 197,
  },
  customBudget: {
    left: 207,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 40,
    color: Color.colorOrangered,
    textAlign: "left",
  },
  below500Child: {
    height: "72.5%",
    top: "15%",
    bottom: "12.5%",
    backgroundColor: Color.lightColorBaseTertiaryLight,
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  below500php: {
    left: "13.16%",
    top: "0%",
    position: "absolute",
  },
  below500: {
    left: 6,
    top: 51,
    width: 114,
    position: "absolute",
  },
  php1: {
    left: 14,
    top: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleParent1: {
    left: 131,
    top: 51,
    width: 114,
    position: "absolute",
  },
  budget: {
    height: 282,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 375,
    justifyContent: "flex-end",
  },
  spendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bgtButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: '#ffffff',
    fontSize: FontSize.size_xs,
  },
  bgtSelected: {
    backgroundColor: '#ff4317',
  },
  customBudgetInput: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Budget;
