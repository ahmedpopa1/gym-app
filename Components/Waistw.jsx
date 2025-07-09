import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";

const Page10 = () => {
  const router = useRouter();

  const [waistWorkouts, setWaistWorkouts] = useState({
    plank: { done: false, notes: "" },
    russianTwists: { done: false, sets: ["", "", ""], notes: "" },
    bicycleCrunches: { done: false, sets: ["", "", ""], notes: "" },
    sidePlanks: { done: false, notes: "" },
    legRaises: { done: false, sets: ["", "", ""], notes: "" },
  });

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem("waistWorkouts");
      if (storedWorkouts) {
        setWaistWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load workouts.");
    }
  };

  const saveWorkouts = async () => {
    try {
      await AsyncStorage.setItem(
        "waistWorkouts",
        JSON.stringify(waistWorkouts)
      );
      Alert.alert("Success", "Workouts saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save workouts.");
    }
  };

  const handleWorkoutChange = (name, value, type, index) => {
    setWaistWorkouts((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [type]:
          type === "sets"
            ? prev[name].sets.map((set, i) => (i === index ? value : set))
            : value,
      },
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/account/cala")}
      >
        <Text style={styles.buttonText}>Go Back to Calendar</Text>
      </TouchableOpacity>

      <Image source={require("../assets/a10.png")} style={styles.image} />
      <Text style={styles.title}>Waist Workout Routine</Text>

      {Object.keys(waistWorkouts).map((key, index) => {
        const workoutTitles = [
          "Plank",
          "Russian Twists",
          "Bicycle Crunches",
          "Side Planks",
          "Leg Raises",
        ];
        return (
          <View key={index} style={styles.workoutContainer}>
            <Text style={styles.workoutTitle}>{workoutTitles[index]}</Text>
            <Text style={styles.workoutDetails}>
              - Enter the details and any notes for each workout.
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Done?</Text>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  waistWorkouts[key].done && styles.checkboxSelected,
                ]}
                onPress={() =>
                  handleWorkoutChange(key, !waistWorkouts[key].done, "done")
                }
              >
                {waistWorkouts[key].done && (
                  <Text style={styles.checkmark}>✔</Text>
                )}
              </TouchableOpacity>
            </View>
            {waistWorkouts[key].sets &&
              waistWorkouts[key].sets.map((set, i) => (
                <TextInput
                  key={i}
                  style={styles.input}
                  placeholder={`Enter reps/time for set ${i + 1}`}
                  value={set}
                  onChangeText={(value) =>
                    handleWorkoutChange(key, value, "sets", i)
                  }
                  editable={waistWorkouts[key].done}
                />
              ))}
            <TextInput
              style={styles.notesInput}
              placeholder="Enter any notes or different workouts"
              value={waistWorkouts[key].notes}
              onChangeText={(value) => handleWorkoutChange(key, value, "notes")}
              editable={waistWorkouts[key].done}
              multiline={true}
            />
          </View>
        );
      })}

      <TouchableOpacity style={styles.saveButton} onPress={saveWorkouts}>
        <Text style={styles.buttonText}>Save Workouts</Text>
      </TouchableOpacity>
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
  workoutContainer: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
  workoutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "black",
  },
  workoutDetails: {
    fontSize: 16,
    textAlign: "left",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#000",
  },
  checkmark: {
    color: "#fff",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: "black",
    width: "100%",
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color: "black",
    width: "100%",
    minHeight: 60,
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
  saveButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  video: {
    width: 350,
    height: 180,
    marginTop: 20,
  },
});

export default Page10;
