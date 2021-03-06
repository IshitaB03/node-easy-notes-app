import React, { Component } from 'react'
import './form.css'
import Display from './Display'
import {withRouter} from 'react-router-dom'

class notes extends Component {
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
    handleSubmit= async (event )=>{
        event.preventDefault()
        await fetch('notes',{
            method: 'POST',
            headers: {'Accept':'application/json, text/plain, /',
            'Content-type':'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                content : this.state.content
            })
        }).then(res => res.json())
        .then(alert("note added"))
    } 
    handleClick=event =>{
        this.props.history.push('./display')
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        const {title,content}=this.state
        return (
            <div >
                <h2><b>Create Note</b></h2>
                <br></br>
                <form onSubmit={this.handleSubmit}>
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
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>
                <br></br>
                <button onClick={this.handleClick}>Show data</button>
            </div>
        )
    }
}

export default withRouter(notes)
