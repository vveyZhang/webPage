import React,{Component} from 'react';
import './common.css';
import Header from './header'
export default  class App extends Component{
    render(){
        return(

            <div>
                <div className="fixPos">
                </div>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}
