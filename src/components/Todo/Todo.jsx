import './Todo.css';
import Delite from '../TodoDeliteButton/DeliteButton';
// import './DeliteButton';


function Todo() {
    return <>
    <li className='todo__itme'>

    <input type="checkbox" />
    <span className='todo__text'>lorem</span>

      <Delite/>

      </li> 
    
    </>
    
    
}

export default Todo ;