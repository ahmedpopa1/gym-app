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

const Page5 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a5.png")} style={styles.image} />
      <Text style={styles.title}>Lower Leg Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample lower leg workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Calf Raises</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 15-20 reps
        {"\n"}- Stand on a step and raise your heels as high as possible
      </Text>
      <Text style={styles.workoutTitle}>2. Seated Calf Raises</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use a seated calf raise machine or hold weights on your knees
      </Text>
      <Text style={styles.workoutTitle}>3. Lunges</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps per leg
        {"\n"}- Step forward and lower your hips until both knees are bent at
        about a 90-degree angle
      </Text>
      <Text style={styles.workoutTitle}>4. Box Jumps</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-12 reps
        {"\n"}- Jump onto a sturdy box or platform, landing softly on the balls
        of your feet
      </Text>
      <Text style={styles.workoutTitle}>5. Jump Rope</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 1 minute
        {"\n"}- Jump rope at a steady pace, focusing on quick, light jumps
      </Text>

      <Text style={styles.workoutTitle}>Lower Leg Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=-qsRtp_PbVM" }} 
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

export default Page5;