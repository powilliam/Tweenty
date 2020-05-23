import React, { useMemo, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Task } from "../../models/Task";

import Button from "../Button";

import {
  Container,
  Leading,
  LeadingColor,
  Informations,
  Title,
  Description,
  ModalFooter,
} from "./styles";

interface Props {
  data: Task;
}

const TaskComponent: React.FC<Props> = ({ data, direction }) => {
  const modalizeRef = useRef<Modalize>(null);

  const dispatch = useDispatch();

  const id = useMemo(() => data.id, [data]);
  const title = useMemo(() => data.title, [data]);
  const description = useMemo(() => data.description, [data]);
  const isArchived = useMemo(() => data.isArchived, [data]);
  const archiveLabel = useMemo(() => {
    if (isArchived) {
      return "Unarchive this task";
    }

    return "Archive this task";
  }, [isArchived]);
  const taskColor = useMemo(() => {
    if (isArchived) {
      return "#999999";
    }
    return "#253237";
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
    dispatch({
      type: "REQUEST_TOGGLE_ARCHIVE_TASK",
      payload: { id, isArchived },
    });
    modalizeRef.current?.close();
  }, [dispatch, id, isArchived, modalizeRef]);

  const handleCompleteTask = useCallback(() => {
    dispatch({ type: "REQUEST_COMPLETE_TASK", payload: { id } });
    modalizeRef.current?.close();
  }, [dispatch, id, modalizeRef]);

  return (
    <>
      <Container activeOpacity={0.7} onPress={handleOpenModalize}>
        <Leading>
          <LeadingColor backgroundColor={taskColor}>
            <MaterialCommunityIcons name={taskIcon} color="#FFF" size={24} />
          </LeadingColor>
          <Informations>
            <Title>{title}</Title>
            {description ? <Description>{description}</Description> : null}
          </Informations>
        </Leading>
      </Container>
      <Portal>
        <Modalize
          ref={modalizeRef}
          modalHeight={650}
          scrollViewProps={{
            contentContainerStyle: {
              alignItems: "center",
              paddingVertical: 30,
              paddingHorizontal: 25,
            },
          }}
          FooterComponent={() => (
            <ModalFooter>
              <Button
                label={archiveLabel}
                backgroundColor="#FFF"
                textColor="#F56476"
                onPress={handleToggleArchive}
              />
              <Button label="Complete this task" onPress={handleCompleteTask} />
            </ModalFooter>
          )}
        >
          <LeadingColor
            backgroundColor={taskColor}
            marginBottom="25px"
            dimensions="80px"
          >
            <MaterialCommunityIcons name={taskIcon} color="#FFF" size={26} />
          </LeadingColor>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}
        </Modalize>
      </Portal>
    </>
  );
};

export default TaskComponent;
