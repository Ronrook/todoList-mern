import { useState } from 'react'
import Form from './components/Form';
import Section from './components/Section';
const appTitle = "TO - DO - APP";


function App() {
  
  return (
    <div className="ui container center aligned">
        <Section>
            <h1>{appTitle}</h1>
        </Section>

        <Section>
            <Form/>
        </Section>
      
    </div>
  )
}

export default App
