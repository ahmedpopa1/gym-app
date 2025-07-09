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
import { useRouter } from "expo-router";

const Page1 = () => {
  const router = useRouter();

  const [workouts, setWorkouts] = useState({
    pullUps: { done: false, sets: ["", "", ""], notes: "" },
    bentOverRows: { done: false, sets: ["", "", ""], notes: "" },
    latPulldowns: { done: false, sets: ["", "", ""], notes: "" },
    deadlifts: { done: false, sets: ["", "", ""], notes: "" },
    facePulls: { done: false, sets: ["", "", ""], notes: "" },
  });

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem("workouts");
      if (storedWorkouts) {
        setWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load workouts.");
    }
  };

  const saveWorkouts = async () => {
    try {
      await AsyncStorage.setItem("workouts", JSON.stringify(workouts));
      Alert.alert("Success", "Workouts saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save workouts.");
    }
  };

  const handleWorkoutChange = (name, value, type, index) => {
    setWorkouts((prev) => ({
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

      <Image source={require("../assets/a1.jpg")} style={styles.image} />
      <Text style={styles.title}>Back Workout Routine</Text>

      {Object.keys(workouts).map((key, index) => {
        const workoutTitles = [
          "Pull-Ups",
          "Bent-Over Rows",
          "Lat Pulldowns",
          "Deadlifts",
          "Face Pulls",
        ];
        return (
          <View key={index} style={styles.workoutContainer}>
            <Text style={styles.workoutTitle}>{workoutTitles[index]}</Text>
            <Text style={styles.workoutDetails}>
              - Enter the weight held during each set and any notes.
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Done?</Text>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  workouts[key].done && styles.checkboxSelected,
                ]}
                onPress={() =>
                  handleWorkoutChange(key, !workouts[key].done, "done")
                }
              >
                {workouts[key].done && <Text style={styles.checkmark}>✔</Text>}
              </TouchableOpacity>
            </View>
            {workouts[key].sets.map((set, i) => (
              <TextInput
                key={i}
                style={styles.input}
                placeholder={`Enter weight for set ${i + 1} (kg)`}
                keyboardType="numeric"
                value={set}
                onChangeText={(value) =>
                  handleWorkoutChange(key, value, "sets", i)
                }
                editable={workouts[key].done}
              />
            ))}
            <TextInput
              style={styles.notesInput}
              placeholder="Enter any notes or different workouts"
              value={workouts[key].notes}
              onChangeText={(value) => handleWorkoutChange(key, value, "notes")}
              editable={workouts[key].done}
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
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: 50,
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
});

export default Page1;
