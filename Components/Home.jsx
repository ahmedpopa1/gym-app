import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const slideImages = [
  require("../assets/slide1.png"),
  require("../assets/slide2.jpg"),
  require("../assets/slide3.png"),
  require("../assets/slide4.png"),
  require("../assets/slide5.png"),
  require("../assets/slide6.jpg"),
];

const boxImages = [
  { source: require("../assets/a1.jpg"), name: "Back" },
  { source: require("../assets/a2.png"), name: "Cardio" },
  { source: require("../assets/a3.png"), name: "Chest" },
  { source: require("../assets/a4.png"), name: "Lower arms" },
  { source: require("../assets/a5.png"), name: "Lower leg" },
  { source: require("../assets/a6.png"), name: "Neck" },
  { source: require("../assets/a7.png"), name: "Shoulders" },
  { source: require("../assets/a8.png"), name: "Upper arms" },
  { source: require("../assets/a9.png"), name: "Upper legs" },
  { source: require("../assets/a10.png"), name: "Waist" },
];

const logoImage = require("../assets/logo.png");

const HomePage = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleBoxPress = (index) => {
    const routes = [
      "/account/back",
      "/account/cardio",
      "/account/chest",
      "/account/lowerarm",
      "/account/lowerleg",
      "/account/neck",
      "/account/shoulders",
      "/account/upperarm",
      "/account/upperleg",
      "/account/waist",
    ];
    router.replace(routes[index]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Ready for</Text>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <Text style={styles.title2}>fitness workouts</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/account/MyProfile")}
        >
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/account/cala")}
        >
          <Text style={styles.buttonText}> Your Calendar</Text>
        </TouchableOpacity>

        <View style={styles.sliderContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentOffset={{ x: activeIndex * 300, y: 0 }}
          >
            {slideImages.map((image, index) => (
              <View key={index} style={styles.slideItem}>
                <Image source={image} style={styles.slideImage} />
              </View>
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {slideImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeIndex ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.boxContainer}>
          {boxImages.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleBoxPress(index)}
              style={styles.boxItem}
            >
              <Image source={item.source} style={styles.boxImage} />
              <Text style={styles.boxName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,
  },
  logo: {
    width: 90,
    height: 50,
    resizeMode: "contain",
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  sliderContainer: {
    height: 220,
    marginBottom: 10,
    position: "relative",
  },
  slideItem: {
    width: 300,
    alignItems: "center",
  },
  slideImage: {
    width: 300,
    height: 200,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 15,
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "black",
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  boxItem: {
    padding: 5,
    alignItems: "center",
    width: "48%",
    marginBottom: 10,
  },
  boxImage: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  boxName: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
});

export default HomePage;
