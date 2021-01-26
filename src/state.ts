interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface LocalState {
  todo: string;
  list: Todo[];
}

export const initialState = {
  todo: "",
  list: [],
};

type Actions =
  | {
      type: "SET_VALUE";
      field: string;
      value: string | number;
    }
  | {
      type: "ADD_TODO";
    }
  | {
      type: "TOGGLE_STATUS";
      id: number;
    };

export const reducer = (state: LocalState, action: Actions) => {
  switch (action.type) {
    case "SET_VALUE": {
      return { ...state, [action.field]: action.value };
    }

    case "ADD_TODO": {
      const newTodos = [
        { id: state.list.length + 1, name: state.todo, completed: false },
        ...state.list,
      ];

      return {
        ...state,
        list: newTodos,
        todo: "",
      };
    }

    case "TOGGLE_STATUS": {
      let list: Todo[] = JSON.parse(JSON.stringify(state.list));

      let index = list.findIndex((item: Todo) => item.id === action.id);
      list[index].completed = !state.list[index].completed;

      return {
        ...state,
        list: list,
      };
    }

    default:
      return state;
  }
};
