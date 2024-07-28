import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const daysOfWeek = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const workouts = [
  { name: "Back Workout", page: "/account/BackWorkout" },
  { name: "Cardio Workout", page: "/account/CardioWorkout" },
  { name: "Chest Workout", page: "/account/ChestWorkout" },
  { name: "Arm Workout", page: "/account/LowerArmWorkout" },
  { name: "Leg Workout", page: "/account/LowerLegWorkout" },
  { name: "Neck Workout", page: "/account/NeckWorkout" },
  { name: "Shoulder Workout", page: "/account/ShoulderWorkout" },
  { name: "Waist Workout", page: "/account/WaistWorkout" },
  { name: "Rest Day", page: null },
];

const WeeklyWorkoutPlan = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedWorkouts, setSelectedWorkouts] = useState({});
  const router = useRouter();

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem("selectedWorkouts");
      if (storedWorkouts) {
        setSelectedWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      console.error("Failed to load workouts from storage", error);
    }
  };

  const saveWorkouts = async (workouts) => {
    try {
      await AsyncStorage.setItem("selectedWorkouts", JSON.stringify(workouts));
    } catch (error) {
      console.error("Failed to save workouts to storage", error);
    }
  };

  const openModal = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDay(null);
  };

  const selectWorkout = (workout) => {
    const updatedWorkouts = {
      ...selectedWorkouts,
      [selectedDay]: workout,
    };
    setSelectedWorkouts(updatedWorkouts);
    saveWorkouts(updatedWorkouts);
    closeModal();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.replace("/account/Home")}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Weekly Workout Plan</Text>
      <View style={styles.calendarContainer}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dayContainer}
            onPress={() => openModal(day)}
          >
            <Text style={styles.day}>{day}</Text>
            {selectedWorkouts[day] && (
              <Text style={styles.selectedWorkout}>
                {selectedWorkouts[day].name}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Select Workout for {selectedDay}
            </Text>
            {workouts.map((workout, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.workoutButton}
                onPress={() => selectWorkout(workout)}
              >
                <Text style={styles.buttonText}>{workout.name}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  homeButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  dayContainer: {
    width: "40%",
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
  },
  day: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  selectedWorkout: {
    marginTop: 5,
    fontSize: 16,
    color: "green",
  },
  workoutButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default WeeklyWorkoutPlan;
