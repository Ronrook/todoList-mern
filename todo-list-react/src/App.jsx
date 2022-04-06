import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import Section from './components/Section';
import axios from 'axios'
const appTitle = "TO - DO - APP";

const list = [
  {title: "test 1", completed: false },
  {title: "test 2" },
  {title: "test 3"},
  {title: "test 4"}
];


const res = await axios.get('http://localhost:4000/api/task');
console.log(res)



function App() {


  const [todoList, settodoList] = useState(list);
  
  return (
    <div className="ui container center aligned">
        <Section>
            <h1>{appTitle}</h1>
        </Section>

        <Section>
            <Form/>
        </Section>

        <Section>
            <List list= {todoList} />
        </Section>
      
    </div>
  )
}

export default App
