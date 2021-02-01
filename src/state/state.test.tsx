import { initialState, reducer, Actions, LocalState } from "./index";

const localState = () => {
  const initialState: LocalState = {
    list: [],
    copy: [],
    todo: "",
    activeTab: "all",
    isTodoAdded: false
  };

  return { initialState };
};

test("Whether we are able to set a value", () => {
  const setValue: Actions = { type: "SET_VALUE", field: "todo", value: "todo" };
  const updatedState = reducer(initialState, setValue);
  expect(updatedState.todo).toEqual("todo");
});

test("Whether todo is created when some value is given", () => {
  let { initialState } = localState();
  initialState.todo = "Todo";

  const addTodo: Actions = { type: "ADD_TODO" };
  const updatedState = reducer(initialState, addTodo);

  expect(updatedState.list).toEqual([
    { id: 1, name: "Todo", completed: false },
  ]);

  expect(updatedState.copy).toEqual([
    { id: 1, name: "Todo", completed: false },
  ]);
});

test("Whether todo is NOT created when same value is given", () => {
  let { initialState } = localState();
  initialState.list.push({ id: 1, name: "Todo", completed: false });
  initialState.copy.push({ id: 1, name: "Todo", completed: false });

  initialState.todo = "Todo";

  const addTodo: Actions = { type: "ADD_TODO" };
  const updatedState = reducer(initialState, addTodo);
  expect(updatedState.list.length).toBe(1);
});

test("Whether todo item is marked complete", () => {
  let { initialState } = localState();
  initialState.list.push({ id: 1, name: "Todo", completed: false });

  const toggleStatus: Actions = { type: "TOGGLE_STATUS", id: 1 };
  const updatedState = reducer(initialState, toggleStatus);

  expect(updatedState.list).toEqual([{ id: 1, name: "Todo", completed: true }]);
});

test("Whether todo item is marked incomplete", () => {
  let { initialState } = localState();
  initialState.list.push({ id: 1, name: "Todo", completed: true });

  const toggleStatus: Actions = { type: "TOGGLE_STATUS", id: 1 };
  const updatedState = reducer(initialState, toggleStatus);

  expect(updatedState.list).toEqual([
    { id: 1, name: "Todo", completed: false },
  ]);
});

test("Whether todo is deleted", () => {
  let { initialState } = localState();
  initialState.list.push({ id: 1, name: "Todo", completed: false });
  initialState.copy.push({ id: 1, name: "Todo", completed: false });

  const deleteTodo: Actions = { type: "DELETE_TODO", id: 1 };
  const updatedState = reducer(initialState, deleteTodo);
  expect(updatedState.list.length).toEqual(0);
  expect(updatedState.copy.length).toEqual(0);
});

test("Whether a completed todo is cleared", () => {
  let { initialState } = localState();
  initialState.list.push({ id: 1, name: "Todo", completed: true });
  initialState.list.push({ id: 1, name: "Todo", completed: true });

  const clearCompleted: Actions = { type: "CLEAR_COMPLETED" };
  const updatedState = reducer(initialState, clearCompleted);
  expect(updatedState.list.length).toEqual(0);
  expect(updatedState.copy.length).toEqual(0);
});

test("Whether todos are filtered by 'All' tab", () => {
  let { initialState } = localState();
  initialState.copy.push({ id: 1, name: "Todo 1", completed: true });
  initialState.copy.push({ id: 2, name: "Todo 2", completed: false });
  initialState.copy.push({ id: 3, name: "Todo 3", completed: true });

  const filterTodo: Actions = { type: "FILTER_TODO", tab: "all" };
  const updatedState = reducer(initialState, filterTodo);
  expect(updatedState.list.length).toEqual(3);
});

test("Whether todos are filtered by 'Active' tab", () => {
  let { initialState } = localState();
  initialState.copy.push({ id: 1, name: "Todo 1", completed: true });
  initialState.copy.push({ id: 2, name: "Todo 2", completed: false });
  initialState.copy.push({ id: 3, name: "Todo 3", completed: false });

  const filterTodo: Actions = { type: "FILTER_TODO", tab: "active" };
  const updatedState = reducer(initialState, filterTodo);
  expect(updatedState.list.length).toEqual(2);
});

test("Whether todos are filtered by 'Completed' tab", () => {
  let { initialState } = localState();
  initialState.copy.push({ id: 1, name: "Todo 1", completed: true });
  initialState.copy.push({ id: 2, name: "Todo 2", completed: true });
  initialState.copy.push({ id: 3, name: "Todo 3", completed: true });

  const filterTodo: Actions = { type: "FILTER_TODO", tab: "completed" };
  const updatedState = reducer(initialState, filterTodo);
  expect(updatedState.list.length).toEqual(3);
});
