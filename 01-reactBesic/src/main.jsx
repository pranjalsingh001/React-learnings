import { createRoot } from 'react-dom/client'

import './index.css'
import myimg from './assets/myimg.jpg'



import Card from './component/card.jsx'


createRoot(document.getElementById('root')).render(
<>
  <div id='div2'>
    <Card 
    name='pranjal'
    img={myimg} 
    desc='hey my name is prnajal singh' />
    <Card 
    name='anyName'
    img='https://images.unsplash.com/photo-1745811248484-503df50eb622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8' 
    desc='hey my name is empaty' />
    
  </div>
 
</>
)