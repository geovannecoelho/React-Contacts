import React, { Component } from 'react';
import './Snackbar.scss'

class Snackbar extends Component{

     constructor(props){
        super(props)
        this.state = {
            show : false
        }
    }

    toggleShow(status){
        this.setState({show : status})
    }

    render(){

        let myClasses = this.state.show ? "snackbar" : "snackbar-hidden" ;

        return(
            <div className={myClasses}>
                <div className="my-snackbar">

                    <h2>{this.props.title}</h2>
                    <div>{this.props.children}</div>

                    <div className="">
                        <div className="col">
                            <button className="btn-login" onClick={() => { this.props.onConfirm()}}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }

}

export default Snackbar;