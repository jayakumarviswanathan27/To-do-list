import React, { Component } from 'react'
import './todo.css'

class Todo extends Component {             
constructor(props) {
    super(props)

    this.state = {
         userInput: "",
         list:[]
    }
}
changeUserInput(input){
    this.setState({
        userInput: input

    })
}
addToList(input) {
let listArray=this.state.list;
listArray.push(input);
this.setState({
    list:listArray,
    userInput:""
})

    
}
delete = (index) => {
    let listArray=this.state.list;
    listArray.splice(index,1);
    this.setState({
        list:listArray
    })
}
    render() {
        return (
        <div className="todo-app">   
        <h1>TO DO LIST</h1>
            <div >
                
                <input className="input"
                 onChange={(e)=>this.changeUserInput(e.target.value)}
                 type="text"
                 value={this.state.userInput}
                 >

                 </input>
                <button onClick={()=>this.addToList(this.state.userInput)}>submit</button>
            </div>
            <div  className="tolist">
                <ul>
                   <div> <li><u>Todo1 list</u></li>
                    { this.state.list.map((val,index)=>(
                    <li className="inner-tolist" key={index}>{val}<button className="delete" onClick={() => this.delete(index)}>Delete</button></li>))}
                    </div>               
                </ul>
            </div>
        </div>
        )
    }
}

export default Todo