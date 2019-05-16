class List extends React.Component {
  constructor(){
    super();
    this.changeHandler = this.changeHandler.bind( this );
  }

  state = {
    list : [],
    word : ""
  };

  changeHandler = (e) => {
    this.setState({word:e.target.value});
    // console.log("", e.target.value);
  }

  submitHandler = (e) => {
    console.log("word:", this.state.word);
    //clears the input field to blank
    let entryField = ""

    let updatedList = this.state.list;

    console.log("length:", this.state.word.length);

    if (this.state.word.length <1) {
        alert("Let's add a item to the ToDO List")
    } else if (this.state.word.length > 30) {
        alert("This is a ToDO List not a storyboard, keep it below 30 characters!!")
    } else {
        updatedList.push(this.state.word);
        this.setState({word: entryField, list: updatedList});
    }
    console.log("list:", this.state.list);

  };

  render() {
      // render the list with a map() here
      // console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.submitHandler}>+ToDo</button>
          <ul>
                {this.state.list.map((item, index) =>
                    <li key={index}>{item}</li>
                    )}
          </ul>
        </div>
      );
    }
}
ReactDOM.render(<List/>,document.getElementById('root'));