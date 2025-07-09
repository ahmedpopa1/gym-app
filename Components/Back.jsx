import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";

const Page1 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a1.jpg")} style={styles.image} />
      <Text style={styles.title}>Back Workout Routine</Text>
      <Text style={styles.content}>Here is a sample back workout routine:</Text>
      <Text style={styles.workoutTitle}>1. Pull-Ups</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 8-12 reps
        {"\n"}- Focus on a full range of motion
      </Text>
      <Text style={styles.workoutTitle}>2. Bent-Over Rows</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Keep your back straight and pull the bar towards your waist
      </Text>
      <Text style={styles.workoutTitle}>3. Lat Pulldowns</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Use a wide grip to target the upper back
      </Text>
      <Text style={styles.workoutTitle}>4. Deadlifts</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 6-10 reps
        {"\n"}- Focus on lifting with your back and legs, keeping your core
        tight
      </Text>
      <Text style={styles.workoutTitle}>5. Face Pulls</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use a cable machine and pull towards your face, squeezing your
        shoulder blades together
      </Text>

      <Text style={styles.workoutTitle}>Back Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=8LJ3Q3Fsrzs" }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  content: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "black",
  },
  workoutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "black",
  },
  workoutDetails: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  video: {
    width: 380,
    height: 200,
    marginTop: 20,
  },
});

export default Page1;
