import { connect } from "react-redux";

function Screen(props){
    return <h1 className="mb-10 text-8xl">{props.value}</h1>
}

function mapStateToProps(state){
    return {
      value: state.value,
      step: state.step
    }
}

export default connect(mapStateToProps)(Screen);