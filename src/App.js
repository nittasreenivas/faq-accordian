import React,{useState}from 'react'

import { questions } from './questions'
import Singlequestion from './Singlequestion'
function App() {
  const [cards] = useState(questions)
  return (
    <>
    <section className='max-w-xl mx-auto py-20 px-4'>
      <h1 className='text-center uppercase tracking-widest font-bold mb-8'>challenge faqs</h1>
      <section className='grid grid-cols-1 gap-8'>
      {
        cards.map((card,index) => {
          return(
            <>
            <Singlequestion key={index} {...card}/>
            </>
          )
        })
      }
      </section>
    </section>
    </>
  )
}

export default App