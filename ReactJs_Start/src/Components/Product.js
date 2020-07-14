import React from 'react'

class Product extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="jumbotron">
                            <h3 className="display-4">Jumbo heading</h3>
                            <p className="lead">Jumbo helper text</p>
                            <hr className="my-3"></hr>
                            <p>More info</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                            </p>
                        </div>
                    </div>   
                    <div className="col-3">
                        <div className="jumbotron">
                            <h3 className="display-4">Jumbo heading</h3>
                            <p className="lead">Jumbo helper text</p>
                            <hr className="my-2"></hr>
                            <p>More info</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                            </p>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}


export default Product