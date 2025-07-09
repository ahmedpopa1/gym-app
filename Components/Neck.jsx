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

const Page6 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a6.png")} style={styles.image} />
      <Text style={styles.title}>Neck Workout Routine</Text>
      <Text style={styles.content}>Here is a sample neck workout routine:</Text>
      <Text style={styles.workoutTitle}>1. Neck Flexion</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Lower your chin to your chest, then return to the starting
        position
      </Text>
      <Text style={styles.workoutTitle}>2. Neck Extension</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Tilt your head back as far as comfortable, then return to the
        starting position
      </Text>
      <Text style={styles.workoutTitle}>3. Lateral Neck Flexion</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps per side
        {"\n"}- Tilt your head towards each shoulder, one side at a time
      </Text>
      <Text style={styles.workoutTitle}>4. Neck Rotation</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps per side
        {"\n"}- Turn your head to the left and right, keeping your chin parallel
        to the ground
      </Text>
      <Text style={styles.workoutTitle}>5. Shoulder Shrugs</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 15-20 reps
        {"\n"}- Raise your shoulders towards your ears, then lower them back
        down
      </Text>

      <Text style={styles.workoutTitle}>Neck Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=I1ertAfrClU" }}
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

export default Page6;
