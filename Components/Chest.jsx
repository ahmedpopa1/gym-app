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

const Page3 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a3.png")} style={styles.image} />
      <Text style={styles.title}>Chest Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample chest workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Bench Press</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 8-12 reps
        {"\n"}- Keep your back flat and press the bar straight up
      </Text>
      <Text style={styles.workoutTitle}>2. Incline Dumbbell Press</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Use an incline bench and press the dumbbells upwards
      </Text>
      <Text style={styles.workoutTitle}>3. Chest Flyes</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use dumbbells or a cable machine to perform flyes
      </Text>
      <Text style={styles.workoutTitle}>4. Push-Ups</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets to failure
        {"\n"}- Keep your body straight and lower yourself until your chest
        touches the ground
      </Text>
      <Text style={styles.workoutTitle}>5. Dips</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 8-12 reps
        {"\n"}- Use parallel bars to dip down and press back up
      </Text>

      <Text style={styles.workoutTitle}>Chest Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=XoTXuZQ4SaU" }}
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
    width: 350,
    height: 200,
    marginTop: 20,
  },
});

export default Page3;
