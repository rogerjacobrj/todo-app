interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface LocalState {
  todo: string;
  list: Todo[];
  copy: Todo[];
  activeTab: string;
}

export const initialState = {
  todo: "",
  list: [],
  copy: [],
  activeTab: "all",
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
    }
  | {
      type: "CLEAR_COMPLETED";
    }
  | {
      type: "DELETE_TODO";
      id: number;
    }
  | {
      type: "FILTER_TODO";
      tab: string;
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
        copy: newTodos,
        todo: "",
      };
    }

    case "TOGGLE_STATUS": {
      let list: Todo[] = JSON.parse(JSON.stringify(state.list));
      let copy: Todo[] = JSON.parse(JSON.stringify(state.copy));

      for (let i = 0; i < list.length; i++) {
        if (list[i].id === action.id) {
          list[i].completed = !list[i].completed;
        }
      }
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].id === action.id) {
          copy[i].completed = !copy[i].completed;
        }
      }

      return {
        ...state,
        list: list,
        copy: copy,
      };
    }

    case "CLEAR_COMPLETED": {
      let cleared = state.list.filter((item) => item.completed !== true);
      let copy = state.copy.filter((item) => item.completed !== true);

      return {
        ...state,
        list: cleared,
        copy: copy,
      };
    }

    case "DELETE_TODO": {
      let deleted = state.list.filter((item) => item.id !== action.id);
      let copy = state.copy.filter((item) => item.id !== action.id);

      return {
        ...state,
        list: deleted,
        copy: copy,
      };
    }

    case "FILTER_TODO": {
      let filtered;
      if (action.tab === "all") {
        filtered = state.copy;
      } else if (action.tab === "active") {
        filtered = state.copy.filter((item) => item.completed !== true);
      } else {
        filtered = state.copy.filter((item) => item.completed === true);
      }

      return {
        ...state,
        list: filtered,
      };
    }

    default:
      return state;
  }
};
