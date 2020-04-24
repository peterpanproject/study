import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 변수로 만들어 connect에 넣어줘도 되나 직접 넣어줘도 됨. 문법에 주의. 객체를 바로 return할 때 {}밖에 ()를 씌워줘야 함
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// 각각 변수로 만들어 connect에 넣어줘도 되고, dispatch할 것들이 많을 때는 bindActionCreators를 이용, 혹은 액션 생성 함수를 객체로 바로 connect에 집어넣어줘도 됨
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

export default connect((state) => ({ number: state.counter.number }), {
  increase,
  decrease,
})(CounterContainer);
