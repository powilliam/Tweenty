import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { FAB, IconButton, ActivityIndicator } from "react-native-paper";

import { Task } from "../../models/Task";

import { Reducer } from "../../redux/store";

import TaskComponent from "../../components/Task";

import styles, { Container, EmptyText } from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const tasks = useSelector<Reducer, Task[]>(
    (state) => state.tasks.uncompleted
  );

  const isEmpty = useMemo(() => {
    if (tasks.length == 0) return true;

    return false;
  }, [tasks]);

  const handleNavigateToCreateTask = useCallback(
    () => navigation.navigate("CreateTask"),
    [navigation]
  );

  const renderItem = useCallback<ListRenderItem<Task>>(
    ({ item }) => <TaskComponent data={item} />,
    []
  );

  const loadTasks = useCallback(() => {
    dispatch({ type: "REQUEST_GET_TASKS" });
  }, [dispatch]);

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Container>
      {isEmpty ? (
        <EmptyText>Tasks you create will appear here</EmptyText>
      ) : (
        <FlatList
          contentContainerStyle={styles.taskListContainer}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <FAB
        icon="plus"
        color="#FFF"
        style={styles.button}
        onPress={handleNavigateToCreateTask}
      />
    </Container>
  );
};

/*<FlatList
  contentContainerStyle={styles.taskListContainer}
  data={tasks}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
/> */

export default Home;
