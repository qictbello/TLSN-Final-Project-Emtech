import React, { useState, useCallback, useEffect } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
  Platform,
} from "react-native";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import Cuisine from "../components/Cuisine";
import Budget from "../components/Budget";
import AdvancedRadius from "../components/AdvancedRadius";
import { Color, FontFamily } from "../GlobalStyles";

const LoadingScreen = () => {
  const [groupContainer2Visible, setGroupContainer2Visible] = useState(false);
  const [groupContainer3Visible, setGroupContainer3Visible] = useState(false);
  const [groupContainer4Visible, setGroupContainer4Visible] = useState(false);
  const [restaurantDetailsModalVisible, setRestaurantDetailsModalVisible] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [radius, setRadius] = useState(1000);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [customBudget, setCustomBudget] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const apiKey = "AIzaSyDddbqZ2peQJYj1KTQJaUhyna4rfBmxtO0";
  const placesApiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

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

  const handleRadiusApply = useCallback((newRadius) => {
    setRadius(newRadius * 1000); // Convert km to meters
  }, []);

  const budgetToPriceLevelMap = {
    'low': [0, 1], // Below 500php
    'medium': [2], // 5 - 1k PHP
    'high': [3], // 1k - 2k PHP
    'super': [4], // Above 2k
  };

  const handleBudgetSelection = (selectedBudget, customBudget) => {
    console.log("Selected Budget:", selectedBudget);
    if (selectedBudget === 'custom') {
      console.log("Custom Budget Value:", customBudget);
    }
    setSelectedBudget(selectedBudget);
    // Trigger a new fetch when the budget changes
    fetchNearbyRestaurants(userLocation, radius, selectedBudget, customBudget, selectedCuisine);
  };

  const centerMapViewToUserLocation = useCallback(() => {
    if (userLocation && mapRef) {
      mapRef.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [userLocation, mapRef]);

  const fetchNearbyRestaurants = async (userLocation, radius, selectedBudget, customBudget, selectedCuisine) => {
    try {
      let priceLevels = [];
      if (selectedBudget !== 'custom') {
        priceLevels = budgetToPriceLevelMap[selectedBudget] || [];
      }
      let restaurants = [];
      let nextPageToken = null;
      do {
        const response = await axios.get(placesApiUrl, {
          params: {
            location: `${userLocation.latitude},${userLocation.longitude}`,
            radius: radius,
            type: 'restaurant',
            key: apiKey,
            keyword: selectedCuisine,
            ...(priceLevels.length > 0 && { priceLevels: priceLevels.join(',') }),
            ...(nextPageToken && { pagetoken: nextPageToken })
          },
        });
        restaurants = [...restaurants, ...response.data.results];
        nextPageToken = response.data.next_page_token;
      } while (nextPageToken);
      if (selectedBudget && budgetToPriceLevelMap[selectedBudget]) {
        const allowedPriceLevels = budgetToPriceLevelMap[selectedBudget];
        restaurants = restaurants.filter(restaurant =>
          allowedPriceLevels.includes(restaurant.price_level)
        );
      }
      setNearbyRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching nearby restaurants:', error.message);
      setNearbyRestaurants([]);
    }
  };

  useEffect(() => {
    // Get user's current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);

      // Fetch nearby restaurants
      await fetchNearbyRestaurants(location.coords, radius, selectedBudget, customBudget, selectedCuisine);
    })();
    if (mapRef === null) {
      // Corrected line to set the reference correctly
      setMapRef(mapRef);
    }
  }, [radius, selectedBudget, customBudget, selectedCuisine]);

  const openGoogleMapsInModal = () => {
    console.log("Selected Restaurant:", selectedRestaurant);
  
    if (selectedRestaurant && selectedRestaurant.geometry && selectedRestaurant.geometry.location) {
      const { lat, lng } = selectedRestaurant.geometry.location; // Change here
      console.log("Latitude:", lat, "Longitude:", lng);
  
      const url = Platform.select({
        ios: `maps://app?saddr=Current%20Location&daddr=${lat},${lng}`, // Change here
        android: `google.navigation:q=${lat},${lng}`, // Change here
      });
  
      console.log("Opening URL:", url);
      Linking.openURL(url);
    } else {
      console.warn("Selected restaurant is not valid for navigation.");
    }
  };
  
  
  
  const openGoogleMaps = () => {
    if (selectedRestaurant && selectedRestaurant.name) {
      const restaurantName = encodeURIComponent(selectedRestaurant.name);
      const url = Platform.select({
        ios: `maps://app?q=${restaurantName}`,
        android: `https://www.google.com/maps/search/?api=1&query=${restaurantName}`,
      });
      Linking.openURL(url);
    }
  };
  
  const openRestaurantDetailsModal = useCallback((restaurant) => {
    setSelectedRestaurant(restaurant);
    setRestaurantDetailsModalVisible(true);
  }, []);

  const closeRestaurantDetailsModal = useCallback(() => {
    setSelectedRestaurant(null);
    setRestaurantDetailsModalVisible(false);
  }, []);

  return (
    <>
      <View style={styles.loadingScreen}>
        <MapView
          ref={(ref) => setMapRef(ref)}
          style={{ flex: 1, zIndex: 0 }}
          initialRegion={{
            latitude: userLocation?.latitude || 0,
            longitude: userLocation?.longitude || 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {userLocation && (
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              title="Your Location"
              description="You are here"
            />
          )}
          {userLocation && (
            <Circle
              center={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              radius={radius}
              strokeWidth={1}
              strokeColor={"#FF4317"}
              fillColor={"rgba(255, 67, 23, 0.2)"}
            />
          )}

          {/* Display nearby restaurants as markers on the map */}
        {nearbyRestaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            title={restaurant.name}
            description={restaurant.vicinity}
            onPress={() => openRestaurantDetailsModal(restaurant)}
          >
            <Callout>
              <View>
                <Text>{restaurant.name}</Text>
                <Text>{restaurant.vicinity}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
        </MapView>

        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle.png")}
            />
            <Pressable onPress={centerMapViewToUserLocation} style={[styles.group, styles.groupPosition]}>
            <Text style={styles.news}>Nearby</Text>
            <Image
              style={[styles.nearbyIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/nearby1.png")}
            />
            </Pressable>
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

        <Pressable onPress={openGroupContainer4} style={styles.group4Button}>
          <Image
            style={styles.loadingScreenChild}
            contentFit="cover"
            source={require("../assets/group-36529.png")}
          />
        </Pressable>
      </View>

      <Modal
          animationType="slide"
          transparent={true}
          visible={restaurantDetailsModalVisible}
          onRequestClose={closeRestaurantDetailsModal}
        >
          <Pressable
            style={styles.modalContainer}
            onPress={closeRestaurantDetailsModal}
          >
            <View style={styles.modalContent}>
              <Text style={styles.restaurantDetailsTitle}>
                {selectedRestaurant?.name}
              </Text>
              <Text style={styles.restaurantDetailsAddress}>
                {selectedRestaurant?.vicinity}
              </Text>
              
              {/* Navigate to Google Maps button */}
              <Pressable onPress={openGoogleMapsInModal}>
                <Text style={{ color: Color.colorOrangered }}>Navigate to Google Maps</Text>
              </Pressable>

              {/* Go to Google Maps button */}
              <Pressable onPress={openGoogleMaps}>
                <Text style={{ color: Color.colorOrangered }}>Go to Google Maps</Text>
              </Pressable>

              {/* Close button */}
              <Pressable onPress={closeRestaurantDetailsModal}>
                <Text style={{ color: Color.colorOrangered }}>Close</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>

      <Modal animationType="fade" transparent visible={groupContainer4Visible}>
        <View style={styles.groupContainer4Overlay}>
          <Pressable onPress={closeGroupContainer4}>
            {/* Pass the onClose prop to handle closing the modal */}
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
          <Budget onClose={closeGroupContainer2} onBudgetSelect={handleBudgetSelection} 
            selectedBudgetProp={selectedBudget}/>
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer3Visible}>
        <View style={styles.groupContainer3Overlay}>
          <Pressable
            style={styles.groupContainer3Bg}
            onPress={closeGroupContainer3}
          />
          <AdvancedRadius onClose={closeGroupContainer3} onApply={handleRadiusApply} />
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
    marginTop: -35,
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
    justifyContent: "flex-end",
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
  group4Button: {
    position: 'absolute',
    top: -5,
    left: 7.5,
    width: 375,
    height: 56,
    zIndex: 1,
  },
  restaurantDetailsModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the opacity as needed
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  restaurantDetailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  restaurantImage: {
    width: "100%",
    height: 150,
    marginBottom: 8,
    borderRadius: 8,
  },
  restaurantDetailsAddress: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default LoadingScreen;