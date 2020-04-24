import { createAction, handleActions } from "redux-actions";

// 1. 액션타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 2. 액션 생성 함수
// createAction을 이용하면 간단히 표현 가능
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3. 초기값 지정
const initialState = {
  number: 0,
};

// 4. 현재 상태를 참조 후 새로운 객체를 생성해서 반환 -> export
//handleActions를 이용하면 간단히 표현 가능
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
