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

const Page10 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a10.png")} style={styles.image} />
      <Text style={styles.title}>Waist Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample waist workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Plank</Text>
      <Text style={styles.workoutDetails}>
        - Hold for 1-2 minutes
        {"\n"}- Keep your body in a straight line from head to heels
      </Text>
      <Text style={styles.workoutTitle}>2. Russian Twists</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 15-20 reps per side
        {"\n"}- Sit on the ground with your legs bent and twist your torso from
        side to side
      </Text>
      <Text style={styles.workoutTitle}>3. Bicycle Crunches</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 20-30 reps
        {"\n"}- Lie on your back and pedal your legs as if riding a bicycle
        while touching your elbow to the opposite knee
      </Text>
      <Text style={styles.workoutTitle}>4. Side Planks</Text>
      <Text style={styles.workoutDetails}>
        - Hold for 1 minute per side
        {"\n"}- Keep your body in a straight line from head to feet
      </Text>
      <Text style={styles.workoutTitle}>5. Leg Raises</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 15-20 reps
        {"\n"}- Lie on your back and raise your legs until they are
        perpendicular to the ground
      </Text>

      <Text style={styles.workoutTitle}>Waist Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=lx-nup9Nu4k" }}
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

export default Page10;
