import './TodoForm.css';

function TodoForm() {
  return <>
  <form className='todos__form'>
      <input className='todos__input' type="text" placeholder='What needs to be done?' />
      <button className='todo__form__button'>add</button>
      </form>
  </>
   
  
}

export default TodoForm ;
