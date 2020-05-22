import React, { useMemo, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Task } from "../../models/Task";

import styles from "./styles";

interface Props {
  data: Task;
}

const TaskComponent: React.FC<Props> = ({ data }) => {
  const modalizeRef = useRef<Modalize>(null);

  const dispatch = useDispatch();

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

  const handleOpenModalize = useCallback(() => {
    modalizeRef.current?.open();
  }, [modalizeRef]);

  const handleToggleArchive = useCallback(() => {
    modalizeRef.current?.close();
    dispatch({
      type: "REQUEST_TOGGLE_ARCHIVE_TASK",
      payload: { id, isArchived },
    });
  }, [dispatch, id, isArchived, modalizeRef]);

  const handleCompleteTask = useCallback(() => {
    modalizeRef.current?.close();
    dispatch({ type: "REQUEST_COMPLETE_TASK", payload: { id } });
  }, [dispatch, id, modalizeRef]);

  return (
    <>
      <TouchableOpacity
        style={styles.taskContainer}
        onPress={handleOpenModalize}
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
      <Portal>
        <Modalize
          ref={modalizeRef}
          modalStyle={styles.modalContainer}
          scrollViewProps={{
            contentContainerStyle: {
              marginTop: 25,
              paddingHorizontal: 45,
              paddingBottom: 50,
            },
          }}
          FooterComponent={() => (
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
          )}
        >
          <Text style={styles.taskTitle}>{title}</Text>
          {description ? (
            <Text style={styles.taskDescription}>{description}</Text>
          ) : null}
        </Modalize>
      </Portal>
    </>
  );
};

export default TaskComponent;
