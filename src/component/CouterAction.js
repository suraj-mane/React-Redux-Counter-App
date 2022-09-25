import { connect } from "react-redux";

function CouterAction(props){
    
    function handleClick(type){
        props.dispatch({
            type
        });
    }

    return (
        <>
            <button className="bg-green-500 rounded text-gray-50 p-2 ml-2" onClick={() => handleClick('increment')}>Increment</button>
            <button className="bg-green-500 rounded text-gray-50 p-2 ml-2" onClick={() => handleClick('decrement')}>decrement</button>
            <button className="bg-green-500 rounded text-gray-50 p-2 ml-2" onClick={() => handleClick('reset')}>reset</button>
        </>
    )
}

export default connect()(CouterAction);