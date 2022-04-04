

const Todo = () => {
    return (
        <div className="row">
            <div className="column five wide">
                <h1>Test</h1>
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
    )
}

export default Todo;
