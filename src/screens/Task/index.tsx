import React, { useMemo, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";

import styles from "./styles";

type ParamList = {
  Task: { id: string; title: string; description: string; isArchived: boolean };
};

type TaskScreenRouteProp = RouteProp<ParamList, "Task">;

const Task: React.FC = () => {
  const { params } = useRoute<TaskScreenRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const id = useMemo(() => params.id, [params]);
  const title = useMemo(() => params.title, [params]);
  const description = useMemo(() => params.description, [params]);
  const isArchived = useMemo(() => params.isArchived, [params]);

  const handleToggleArchive = useCallback(() => {
    dispatch({
      type: "REQUEST_TOGGLE_ARCHIVE_TASK",
      payload: { id, isArchived },
    });
    navigation.navigate("Home", {
      screen: isArchived ? "Home" : "Archive",
    });
  }, [navigation, dispatch, id, isArchived]);

  const handleCompleteTask = useCallback(() => {
    dispatch({ type: "REQUEST_COMPLETE_TASK", payload: { id } });
    navigation.goBack();
  }, [navigation, dispatch, id]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollviewContainer}
    >
      <View style={styles.informationContainer}>
        <Text style={styles.taskTitle}>{title}</Text>
        {description ? (
          <Text style={styles.taskDecription}>{description}</Text>
        ) : null}
        <View style={styles.buttonsContainer}>
          <Button
            icon="archive"
            mode="outlined"
            color="#666"
            onPress={handleToggleArchive}
          >
            <Text>{isArchived ? "unarchive" : "archive"}</Text>
          </Button>
          <Button
            icon="check"
            mode="contained"
            color="#5AA9E6"
            onPress={handleCompleteTask}
          >
            <Text>COMPLETE</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Task;
