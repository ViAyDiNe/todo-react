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
    let date = moment().format("DD MMM YYYY");
    let newEntry = [this.state.word, date];

    let updatedList = this.state.list;

    console.log("length:", this.state.word.length);

    if (this.state.word.length <1) {
        this.setState({className: classWarn});
        alert("Let's add a item to the ToDO List")
    } else if (this.state.word.length > 30) {
         this.setState({className: classWarn});
        alert("This is a ToDO List not a storyboard, keep it below 30 characters!!")
    } else {
        updatedList.push(newEntry);
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

      let listItems = this.state.list.map((item, index) =>{
        return(
            <tr key={index} id={index}>
                <td>{index+1}</td>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>
                    <button onClick={() =>this.deleteHandler(index)}>Remove</button>
                </td>
            </tr>
            )
      })

      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word} className={this.state.className}/>
          <button onClick={this.submitHandler}>+ToDo</button>
          <table>
          <thead>
            <tr>
                <th>#</th>
                <th>ToDo</th>
                <th>Created</th>
                <th>Action</th>
            </tr>
           </thead>
           <tbody>
                {listItems}
           </tbody>
           </table>
        </div>
      );
    }
}
ReactDOM.render(<List/>,document.getElementById('root'));