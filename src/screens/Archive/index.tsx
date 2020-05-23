import React, { useCallback, useMemo } from "react";
import { FlatList, Text, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";

import { Task } from "../../models/Task";

import { Reducer } from "../../redux/store";

import TaskComponent from "../../components/Task";

import styles, { Container, EmptyText } from "./styles";

const Archive: React.FC = () => {
  const tasks = useSelector<Reducer, Task[]>((state) => state.tasks.archived);

  const isEmpty = useMemo(() => {
    if (tasks.length == 0) return true;

    return false;
  }, [tasks]);

  const renderItem = useCallback<ListRenderItem<Task>>(
    ({ item }) => <TaskComponent data={item} />,
    []
  );

  return (
    <Container>
      {isEmpty ? (
        <EmptyText>Tasks you archive will appear here</EmptyText>
      ) : (
        <FlatList
          contentContainerStyle={styles.taskListContainer}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </Container>
  );
};

export default Archive;
