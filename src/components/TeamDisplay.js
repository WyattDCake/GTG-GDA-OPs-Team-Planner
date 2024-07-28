import React from "react";
import '../styles.css';

class TeamDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        return(
            <div className="team-display">
                <div className="section-name"></div>
                <div className="team-planner"></div>
                <div className="stat-display"></div>   
            </div>
        )
    }
}

export default TeamDisplay