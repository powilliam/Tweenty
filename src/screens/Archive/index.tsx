import React, { useCallback } from "react";
import { FlatList, View, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";

import { Task } from "../../models/Task";

import { Reducer } from "../../redux/store";

import Header from "../../components/Header";
import TaskComponent from "../../components/Task";

import styles from "./styles";

const Archive: React.FC = () => {
  const tasks = useSelector<Reducer, Task[]>((state) => state.tasks.archived);

  const renderItem = useCallback<ListRenderItem<Task>>(
    ({ item }) => <TaskComponent data={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <Header title="Archived tasks" />
      <FlatList
        contentContainerStyle={styles.taskListContainer}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Archive;
