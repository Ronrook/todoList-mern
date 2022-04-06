import React from "react";
import Todo from "./Todo";

const List = ({list}) => {
    const renderList = list.map((item)=> <Todo title={item.title} completed ={item.completed} key={item.title}/>)
    return (
        <div className="ui grid center aligned">
            {renderList}    
        </div>
    );
};

export default List;
