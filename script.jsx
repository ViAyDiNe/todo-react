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
    console.log("", e.target.value);
  }

  submitHandler = (e) => {
    //clears the input field to blank
    let entryField = ""

    console.log("word", this.state.word);
    let updatedList = this.state.list;
    updatedList.push(this.state.word);
    this.setState({word: entryField, list: updatedList});
     console.log("list", this.state.list);
  };

  render() {
      // render the list with a map() here
      // console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.submitHandler}>+ToDo</button>

        </div>
      );
    }
}
ReactDOM.render(<List/>,document.getElementById('root'));