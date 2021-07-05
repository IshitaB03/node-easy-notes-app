import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Edit from './Edit'

class display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:[],
        }
    }

    getData=()=>{
        fetch('notes')
        .then(res => res.json())
        .then(notes => this.setState({
            notes
        },()=> console.log(notes)))
    }

    componentDidMount(){
        this.getData()
    }

    handleDelete= async(id,event) =>{
        await fetch('notes/' + id,{
            method: 'DELETE',
        }).then(res => res.json())
        .then(alert("note deleted"))
        this.getData()
    }
    handleUpdate=async(id,event)=>{
        this.props.history.push({
            pathname: './edit',
            state:id})
    }
    render() {
        
        return (
            <div>
                    {this.state.notes.map(note=>
                    <div key={note._id} >
                        <b>Title : </b>{note.title}<br></br> <b>Content : </b> {note.content}
                        <br></br>
                        <button onClick={()=>this.handleUpdate(note._id)}>Edit</button>
                        <button onClick={()=>this.handleDelete(note._id)} >Delete</button>
                        
                        <hr></hr>
                    </div>)}
            </div>
            
        )
        
    }
}

export default withRouter(display)
