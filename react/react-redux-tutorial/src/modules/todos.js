import { createAction, handleActions } from "redux-actions";

// 1. 액션 타입 정의
const CHANGE_INPUT = "input/CHANGE_INPUT";
const INSERT = "input/INSERT";
const TOGGLE = "input/TOGGLE";
const REMOVE = "input/REMOVE";

// 2. 액션 생성 함수
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: ++id,
//     text,
//     done: false,
//   },
// });
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
export const changeInput = createAction(CHANGE_INPUT);
let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: ++id,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 3. 초기값 설정
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 3,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// 4. 현재 상태를 참조해서 새로운 객체로 반환 -> export

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         //   todos:[...todos, action.todo]
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => console.log(action.payload),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initialState
);

export default todos;
