import React from "react";
import '../styles.css';
import TeamDisplay from "./TeamDisplay";
import Header from "./Header";

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="homepage">
                <Header/>
                <div className="content">
                    <div className="team-display-page">
                        <TeamDisplay/>
                    </div>
                    <div className="unit-display-page"></div>        
                </div>
            </div>
        )
    }
}

export default Homepage