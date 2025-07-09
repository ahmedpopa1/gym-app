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

const Page9 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a9.png")} style={styles.image} />
      <Text style={styles.title}>Upper Leg Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample upper leg workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Squats</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Use a barbell or dumbbells and lower your body until your thighs
        are parallel to the ground
      </Text>
      <Text style={styles.workoutTitle}>2. Lunges</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps per leg
        {"\n"}- Step forward with one leg and lower your body until both knees
        are bent at a 90-degree angle
      </Text>
      <Text style={styles.workoutTitle}>3. Leg Press</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Use a leg press machine and push the platform away from your
        body
      </Text>
      <Text style={styles.workoutTitle}>4. Romanian Deadlifts</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-12 reps
        {"\n"}- Use a barbell or dumbbells and lower the weights while keeping
        your legs slightly bent
      </Text>
      <Text style={styles.workoutTitle}>5. Leg Extensions</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use a leg extension machine and extend your legs until they are
        straight
      </Text>

      <Text style={styles.workoutTitle}>Upper Leg Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=DpIeBMgh2OA" }}
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
    borderRadius: 10,
    marginBottom: 20,
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

export default Page9;
