import { connect } from "react-redux";

function StepAction(props){

    function handleClick(step){
        props.dispatch({
            type:"changeStep",
            payload:step
        })
    }

    return (
        <>
            <button className={props.step === 5 ? "bg-green-500 rounded text-gray-50 p-2 ml-2 mt-5" : "bg-red-500 rounded text-gray-50 p-2 ml-2 mt-5"} onClick={() => handleClick(5)}>5</button>
            <button className={props.step === 10 ? "bg-green-500 rounded text-gray-50 p-2 ml-2 mt-5" : "bg-red-500 rounded text-gray-50 p-2 ml-2 mt-5"} onClick={() => handleClick(10)}>10</button>
            <button className={props.step === 15 ? "bg-green-500 rounded text-gray-50 p-2 ml-2 mt-5" : "bg-red-500 rounded text-gray-50 p-2 ml-2 mt-5"} onClick={() => handleClick(15)}>15</button>
        </>
    )
}

function mapStateToProps(state){
    return {
      step: state.step
    }
}

export default connect(mapStateToProps)(StepAction);