import React, { useState, useMemo, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

const CreateTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const buttonColor = useMemo(() => {
    if (!taskTitle) {
      return "#f9f9f9";
    }

    return "#5AA9E6";
  }, [taskTitle]);
  const buttonTextColor = useMemo(() => {
    if (!taskTitle) {
      return "#666";
    }

    return "#FFF";
  }, [taskTitle]);

  const handleCreateTask = useCallback(() => {
    if (taskTitle) {
      dispatch({
        type: "REQUEST_CREATE_TASK",
        payload: {
          title: taskTitle,
          description: taskDescription,
        },
      });

      navigation.navigate("Home", { screen: "Home" });
    }
  }, [navigation, dispatch, taskTitle, taskDescription]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <MaterialCommunityIcons
            name="calendar-check"
            color="#F87A85"
            size={30}
          />
          <Text style={styles.formHeaderTitle}>Task</Text>
        </View>
        <TextInput
          style={styles.formTextInput}
          placeholder="Write an awesome title"
          placeholderTextColor="#999"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder="You can add a description too"
          placeholderTextColor="#999"
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
      </View>

      <TouchableOpacity
        style={[styles.createTaskButton, { backgroundColor: buttonColor }]}
        onPress={handleCreateTask}
      >
        <Text style={[styles.createTaskButtonText, { color: buttonTextColor }]}>
          Create this task
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTask;
