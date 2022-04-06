import React, {useState} from "react";

const Todo = ({title, completed }) => {

    const [Value, setvalue] =useState(title);
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setcompleted] = useState(completed);


    const handleDivDubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keycode;

        if (key === 13) {
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(Value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange =(e) => {
        setvalue(e.target.value);
    };

    const handleButtomClick =() => {
        setcompleted(true);
    };

    return (
        <div className="row" onDoubleClick={handleDivDubleClick}>
            {  
                isEditing?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                            />
                        </div>  
                    </div>:
                    <>

                        <div className="column five wide">
                            <h1 className={"ui header" + (completedState ? "green": "")}>{Value}</h1>
                        </div>
                        
                        <div className="column two wide">
                            <button 
                            className="ui button circular icon green"
                            onClick={handleButtomClick}
                            >
                                <i className="white check icon" ></i>
                                
                            </button>
                        </div>
                        <div className="column two wide">
                            <button className="ui button circular icon red">
                                <i className="white remove icon"></i>
                            </button>
                        </div>
                    </>
           } 
        </div>              
    );
};

export default Todo;
