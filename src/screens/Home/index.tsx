import React, { useEffect, useCallback } from "react";
import { FlatList, View, ListRenderItem } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";

import { Task } from "../../models/Task";

import { Reducer } from "../../redux/store";

import Header from "../../components/Header";
import TaskComponent from "../../components/Task";

import styles from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tasks = useSelector<Reducer, Task[]>(
    (state) => state.tasks.uncompleted
  );

  const handleNavigateToCreateTask = useCallback(
    () => navigation.navigate("CreateTask"),
    [navigation]
  );

  const renderItem = useCallback<ListRenderItem<Task>>(
    ({ item }) => <TaskComponent data={item} />,
    []
  );

  useEffect(() => {
    dispatch({ type: "REQUEST_GET_TASKS" });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Your tasks" />
      <FlatList
        contentContainerStyle={styles.taskListContainer}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FAB
        icon="plus"
        color="#FFF"
        style={styles.button}
        onPress={handleNavigateToCreateTask}
      />
    </View>
  );
};

export default Home;
