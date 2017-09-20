import React,{Component} from 'react';


export class WorkItem extends Component{
    render(){
        return(
            <div className="work-item">
                <span className="shape"></span>
                <span className="line line-left"></span>
                <span className="line line-right"></span>
                <div className="content">
                </div>
            </div>
        )
    }
}
