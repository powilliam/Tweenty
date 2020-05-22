import React, { useMemo, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Task } from "../../models/Task";

import styles from "./styles";

interface Props {
  data: Task;
}

const TaskComponent: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();

  const id = useMemo(() => data.id, [data]);
  const title = useMemo(() => data.title, [data]);
  const description = useMemo(() => data.description, [data]);
  const isArchived = useMemo(() => data.isArchived, [data]);
  const taskColor = useMemo(() => {
    if (isArchived) {
      return "#999999";
    }

    return "#FEFFC2";
  }, [isArchived]);
  const taskIcon = useMemo(() => {
    if (isArchived) {
      return "clock-alert-outline";
    }

    return "progress-clock";
  }, [isArchived]);

  const handleNavigateToTask = useCallback(
    () => navigation.navigate("Task", { id, title, description, isArchived }),
    [navigation, id, title, description, isArchived]
  );

  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={handleNavigateToTask}
    >
      <View style={styles.colorAndinformationContainer}>
        <View style={[styles.colorContainer, { backgroundColor: taskColor }]}>
          <MaterialCommunityIcons name={taskIcon} color="#000" size={24} />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.taskTitle}>{title}</Text>
          {description ? (
            <Text style={styles.taskDescription}>{description}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskComponent;
