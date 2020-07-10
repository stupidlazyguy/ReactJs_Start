import React from 'react'



class Header extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" >Nav 1 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Nav 2</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header