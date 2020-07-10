import React from 'react'
class Demo extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}
export default Demo;