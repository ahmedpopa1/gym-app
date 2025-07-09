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

const Page7 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a7.png")} style={styles.image} />
      <Text style={styles.title}>Shoulder Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample shoulder workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Overhead Press</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 8-12 reps
        {"\n"}- Use a barbell or dumbbells and press overhead
      </Text>
      <Text style={styles.workoutTitle}>2. Lateral Raises</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use dumbbells and raise your arms to the sides until parallel to
        the ground
      </Text>
      <Text style={styles.workoutTitle}>3. Front Raises</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use dumbbells and raise your arms in front of you until parallel
        to the ground
      </Text>
      <Text style={styles.workoutTitle}>4. Reverse Flyes</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use dumbbells and bend over slightly, raising your arms to the
        sides
      </Text>
      <Text style={styles.workoutTitle}>5. Shrugs</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 15-20 reps
        {"\n"}- Use a barbell or dumbbells and shrug your shoulders towards your
        ears
      </Text>

      <Text style={styles.workoutTitle}>Shoulder Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=YT7qZKHhwE8" }}
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
    height: 180,
    marginTop: 20,
  },
});

export default Page7;
