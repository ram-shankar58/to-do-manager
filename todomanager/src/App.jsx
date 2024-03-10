import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  function addTask(name){
    alert(name);
  }

  const taskList=props.tasks?.map((x)=>(<Todo id={x.id} name={x.name} completed={x.completed} key={x.id}/>));
  return (
    <div className="todoapp stack-large">
      <h1 hidden={true}>TodoMatic</h1>
      <Form addTask={addTask}></Form>
      <div clas9sName="filters btn-group stack-exception">
        <FilterButton/>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
