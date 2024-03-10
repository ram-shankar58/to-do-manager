function App(props){
  return (
    <>
    <div className="Todoapp">
      <h1>To Do Matic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            What is the task to be done?
          </label>
        </h2>
        <input type="text" id="input" className="input label_lg" name="text" autoComplete="off"></input>
        <button type="submit" className="btn btn_lg submitbutton">ADD</button>

      </form>
      <div className="filters buttongroup">
        <button type="button" className="btn togglebutton" aria-pressed="true">
          <span className="visuallyhidden">Show</span>
          <span>all</span>
          <span className="visuallyhidden">tasks</span>
        </button>
        <button type="button" className="btn togglebutton" aria-pressed="false">
          <span className="visuallyhidden">Show</span>
          <span>Active</span>
          <span className="visuallyhidden">tasks</span>
        </button>
        <button type="button" className="btn togglebutton" aria-pressed="false">
          <span className="visuallyhidden">Show</span>
          <span>Completed</span>
          <span className="visuallyhidden">tasks</span>
        </button>
      </div>
    </div>
    </>
  )
}