import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


class edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            content:''
        }
        this.inputRef= React.createRef()

    }
    handleTitle= event =>{
        this.setState({
            title: event.target.value
        })
    }
    handleContent= event =>{
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit= async (event,id)=>{
        event.preventDefault()
        await fetch('notes/'+id,{
            method: 'PUT',
            headers: {'Accept':'application/json, text/plain, /',
            'Content-type':'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                content : this.state.content
            })
        }).then(res => res.json())
        .then(alert("note updated"))
        this.props.history.push('./display')
    } 

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        const {state}=this.props.location
        const {title,content}=this.state
        return (
            <div>
                <h2><b>Edit Note</b></h2>
                <br></br>
                <form onSubmit={(event)=>this.handleSubmit(event,state)}>
                    <div>
                        
                        <label>Title : </label>
                        <input type="text" ref={this.inputRef}
                        value={title}
                        onChange={this.handleTitle}/>
                    </div>
                    <div>
                        <label>Content : </label>
                        <input type="text"
                        value={content}
                        onChange={this.handleContent}/>
                    </div>
                    <div>
                        <button className="btn btn-dark" type="submit">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (edit)

