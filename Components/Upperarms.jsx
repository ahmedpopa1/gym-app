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

const Page8 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a8.png")} style={styles.image} />
      <Text style={styles.title}>Upper Arm Workout Routine</Text>
      <Text style={styles.content}>
        Here is a sample upper arm workout routine:
      </Text>
      <Text style={styles.workoutTitle}>1. Bicep Curls</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-12 reps
        {"\n"}- Use dumbbells or a barbell and curl your arms upwards
      </Text>
      <Text style={styles.workoutTitle}>2. Tricep Dips</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-15 reps
        {"\n"}- Use parallel bars or a sturdy chair, lowering your body until
        your arms are at a 90-degree angle
      </Text>
      <Text style={styles.workoutTitle}>3. Hammer Curls</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-12 reps
        {"\n"}- Use dumbbells and curl with your palms facing each other
      </Text>
      <Text style={styles.workoutTitle}>4. Tricep Extensions</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 12-15 reps
        {"\n"}- Use a dumbbell or cable machine and extend your arms overhead
      </Text>
      <Text style={styles.workoutTitle}>5. Preacher Curls</Text>
      <Text style={styles.workoutDetails}>
        - 3 sets of 10-12 reps
        {"\n"}- Use an EZ curl bar or dumbbells on a preacher bench
      </Text>

      <Text style={styles.workoutTitle}>Upper Arm Workout Video</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=2S_9dQylItg" }}
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

export default Page8;
