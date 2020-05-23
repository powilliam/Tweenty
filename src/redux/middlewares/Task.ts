import { put, takeLatest, all } from "redux-saga/effects";
import { getRepository } from "typeorm/browser";

import { Task } from "../../models/Task";

interface CreateTaskAction {
  type: string;
  payload: {
    title: string;
    description: string;
  };
}

interface ToggleArchiveTaskAction {
  type: string;
  payload: {
    id: string;
    isArchived: boolean;
  };
}

interface CompleteTaskAction {
  type: string;
  payload: {
    id: string;
  };
}

function* updateState() {
  const taskRepository = getRepository(Task);
  const tasks: Task[] = yield taskRepository.find({
    order: {
      createdAt: "DESC",
    },
  });

  const newState = {
    uncompleted: tasks.filter((task) => !task.isArchived),
    archived: tasks.filter((task) => task.isArchived),
  };

  yield put({
    type: "UPDATE_STATE",
    newState,
  });
}

function* createTask(action: CreateTaskAction) {
  const { title, description } = action.payload;

  const taskRepository = getRepository(Task);

  const task = taskRepository.create({
    title,
    description,
    isArchived: false,
  });
  yield taskRepository.save(task);

  yield updateState();
}

function* toggleArchiveTask(action: ToggleArchiveTaskAction) {
  const { id, isArchived } = action.payload;

  const taskRepository = getRepository(Task);

  yield taskRepository.update({ id }, { isArchived: !isArchived });

  yield updateState();
}

function* completeTask(action: CompleteTaskAction) {
  const { id } = action.payload;

  const taskRepository = getRepository(Task);

  yield taskRepository.delete({ id });

  yield updateState();
}

function* watchRequestTasks() {
  yield takeLatest("REQUEST_GET_TASKS", updateState);
}

function* watchCreateTask() {
  yield takeLatest("REQUEST_CREATE_TASK", createTask);
}

function* watchToggleArchive() {
  yield takeLatest("REQUEST_TOGGLE_ARCHIVE_TASK", toggleArchiveTask);
}

function* watchCompleteTask() {
  yield takeLatest("REQUEST_COMPLETE_TASK", completeTask);
}

export default function* rootTaskMiddlewares() {
  yield all([
    watchRequestTasks(),
    watchCreateTask(),
    watchToggleArchive(),
    watchCompleteTask(),
  ]);
}
