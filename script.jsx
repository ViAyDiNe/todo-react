class List extends React.Component {
  constructor(){
    super();
    this.changeHandler = this.changeHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
    className: ""
  };

  changeHandler = (e) => {
    this.setState({word:e.target.value});
    // console.log("", e.target.value);
  }

  submitHandler = (e) => {
    console.log("word:", this.state.word);
    //clears the input field to blank
    let entryField = "";
    //adds the warning class to the input field
    let classWarn = "warning";
    //clears the class name of the input field on submit
    let classReset = "";

    let updatedList = this.state.list;

    console.log("length:", this.state.word.length);

    if (this.state.word.length <1) {
        this.setState({className: classWarn});
        alert("Let's add a item to the ToDO List")
    } else if (this.state.word.length > 30) {
         this.setState({className: classWarn});
        alert("This is a ToDO List not a storyboard, keep it below 30 characters!!")
    } else {
        updatedList.push(this.state.word);
        this.setState({word: entryField, list: updatedList, className: classReset});
    }
    console.log("list:", this.state.list);

  };

  deleteHandler = (index) => {
    let updatedList = this.state.list;
    console.log(updatedList);
    updatedList.splice(index,1);
    this.setState({list: updatedList});
    console.log(updatedList);

  }

  render() {
      // render the list with a map() here
      // console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word} className={this.state.className}/>
          <button onClick={this.submitHandler}>+ToDo</button>
          <ul>
                {this.state.list.map((item, index) =>
                    <li key={index} id={index}>
                    {item}
                    <button onClick={() =>this.deleteHandler(index)}>Remove</button></li>
                    )}
          </ul>
        </div>
      );
    }
}
ReactDOM.render(<List/>,document.getElementById('root'));