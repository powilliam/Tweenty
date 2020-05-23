import React, { useState, useMemo, useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "../../components/Button";

import { Container, Form, FormHeader, FormHeaderTitle, Input } from "./styles";

const CreateTask: React.FC = () => {
  const theme = useContext(ThemeContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const buttonBackgroundColor = useMemo(() => {
    if (!taskTitle) {
      return "transparent";
    }
  }, [taskTitle]);
  const buttonTextColor = useMemo(() => {
    if (!taskTitle) {
      return "#c1c1c1";
    }
  }, [taskTitle]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

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
    <Container>
      <Form>
        <FormHeader>
          <MaterialCommunityIcons
            name="calendar-check"
            color={theme.systemColor}
            size={30}
          />
          <FormHeaderTitle>Informations</FormHeaderTitle>
        </FormHeader>
        <Input
          placeholder="Write an awesome title"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Input
          placeholder="You can add a description too"
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
      </Form>

      <Button
        label="Create this task"
        onPress={handleCreateTask}
        backgroundColor={buttonBackgroundColor}
        textColor={buttonTextColor}
      />
    </Container>
  );
};

export default CreateTask;
