import React, { Component } from 'react'
import './form.css'
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
    handleSubmit= event =>{

    } 

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        const {title,content}=this.state
        return (
            <div >
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
            </div>
        )
    }
}

export default notes
