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

const Page9 = () => {
  const router = useRouter();

  const [upperLegWorkouts, setUpperLegWorkouts] = useState({
    squats: { done: false, sets: ["", "", ""], notes: "" },
    lunges: { done: false, sets: ["", "", ""], notes: "" },
    legPress: { done: false, sets: ["", "", ""], notes: "" },
    romanianDeadlifts: { done: false, sets: ["", "", ""], notes: "" },
    legExtensions: { done: false, sets: ["", "", ""], notes: "" },
  });

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem("upperLegWorkouts");
      if (storedWorkouts) {
        setUpperLegWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load workouts.");
    }
  };

  const saveWorkouts = async () => {
    try {
      await AsyncStorage.setItem(
        "upperLegWorkouts",
        JSON.stringify(upperLegWorkouts)
      );
      Alert.alert("Success", "Workouts saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save workouts.");
    }
  };

  const handleWorkoutChange = (name, value, type, index) => {
    setUpperLegWorkouts((prev) => ({
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

      <Image source={require("../assets/a9.png")} style={styles.image} />
      <Text style={styles.title}>Upper Leg Workout Routine</Text>

      {Object.keys(upperLegWorkouts).map((key, index) => {
        const workoutTitles = [
          "Squats",
          "Lunges",
          "Leg Press",
          "Romanian Deadlifts",
          "Leg Extensions",
        ];
        return (
          <View key={index} style={styles.workoutContainer}>
            <Text style={styles.workoutTitle}>{workoutTitles[index]}</Text>
            <Text style={styles.workoutDetails}>
              - Enter the reps or time for each set and any notes.
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Done?</Text>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  upperLegWorkouts[key].done && styles.checkboxSelected,
                ]}
                onPress={() =>
                  handleWorkoutChange(key, !upperLegWorkouts[key].done, "done")
                }
              >
                {upperLegWorkouts[key].done && (
                  <Text style={styles.checkmark}>✔</Text>
                )}
              </TouchableOpacity>
            </View>
            {upperLegWorkouts[key].sets.map((set, i) => (
              <TextInput
                key={i}
                style={styles.input}
                placeholder={`Enter reps/time for set ${i + 1}`}
                value={set}
                onChangeText={(value) =>
                  handleWorkoutChange(key, value, "sets", i)
                }
                editable={upperLegWorkouts[key].done}
              />
            ))}
            <TextInput
              style={styles.notesInput}
              placeholder="Enter any notes or different workouts"
              value={upperLegWorkouts[key].notes}
              onChangeText={(value) => handleWorkoutChange(key, value, "notes")}
              editable={upperLegWorkouts[key].done}
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

export default Page9;
