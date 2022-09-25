import { connect } from "react-redux";
import Screen from "./Screen";
import StepAction from "./StepAction";
import CouterAction from "./CouterAction";

function App() {
  return (
    <div className="text-center mt-10">
      <Screen/>
      <CouterAction/>
      <br></br>
      <StepAction/>
    </div>
  );
}

function getState(state){
  return {
    value: state.value
  }
}
export default connect(getState)(App);
