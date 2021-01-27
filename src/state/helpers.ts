import { Todo } from "./index";

export const clearCompleted = (list: Todo[]) => {
  return list.filter((item) => item.completed !== true);
};

export const deleteTodo = (list: Todo[], id: number) => {
  return list.filter((item) => item.id !== id);
};

export const toggleStatus = (list: Todo[], id: number) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i].completed = !list[i].completed;
    }
  }

  return list;
};
