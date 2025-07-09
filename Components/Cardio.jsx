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

const Page2 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a2.png")} style={styles.image} />
      <Text style={styles.title}>Cardio Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample cardio workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Jumping Jacks</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 50 reps
        {"\n"}- Keep your core tight and jump with energy
      </Text>
      <Text style={styles.workoutTitle}>2. High Knees</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 30 seconds
        {"\n"}- Lift your knees high and move quickly
      </Text>
      <Text style={styles.workoutTitle}>3. Burpees</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Perform a full body movement with a jump
      </Text>
      <Text style={styles.workoutTitle}>4. Mountain Climbers</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 30 seconds
        {"\n"}- Drive your knees towards your chest as fast as possible
      </Text>
      <Text style={styles.workoutTitle}>5. Sprints</Text>
      <Text style={styles.workoutDetails}>
        - 5 sets of 100 meters
        {"\n"}- Sprint as fast as you can for 100 meters, then rest and repeat
      </Text>

      <Text style={styles.workoutTitle}>Cardio Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=dj03_VDetdw" }}
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

export default Page2;
