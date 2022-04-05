import React, {useState} from "react";

const Todo = ({title}) => {
    const [Value, setvalue] =useState(title);
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(title);


    const handleDivDubleClick = () => {
        setIsEditing(true);
    }

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

    return (
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

            <div className="row" onDoubleClick={handleDivDubleClick}>
                <div className="column five wide">
                    <h1>{Value}</h1>
                </div>
                <div className="column two wide">
                    <button className="ui button circular icon green">
                        <i className="white check icon"></i>
                    </button>
                </div>
                <div className="column two wide">
                    <button className="ui button circular icon red">
                        <i className="white remove icon"></i>
                    </button>
                </div>
            </div>           
    );
};

export default Todo;
