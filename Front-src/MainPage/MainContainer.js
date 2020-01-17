import React from "react";
import {connect} from "react-redux";
import InputX from "./InputX";
import InputR from "./InputR";
import CanvasComponent from "./CanvasComponent";
import ResultTable from "./ResultTable";

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        if(this.props.user===null) this.props.history.push("/login");
        else this.props.dispatch({type: "APP_GET_POINTS", value:{history: this.props.history}})
    }
    render() {
        return(
        <div className="main-wrapper">
            <div className="Wrapper">
                <div className="leftsidebar">
                </div>
                <div className="Top">
                    ПОПАДАЕТ ЛИ ТВОЯ ТОЧКА В ЭТОТ ГРАФИК?
                </div>
            </div>
            <div className="Wrapper2">
                <div className="leftsidebar2">
                </div>
            <div className="main">
                <p className="login-name">Вы вошли как {this.props.user}</p>
                <div className="step">
                <p>Шаг первый - выберите X.</p><br/>
                <input type="text" value={this.props.x} placeholder="от -4 до 4" onChange={event => this.props.dispatch({
                        type: "MAIN_SET_X",
                        value: event.target.value.replace(",",".")})}/>
                </div>
                <div className="step">
                <p>Шаг второй - выберите Y.</p><br/>
                <input type="text" value={this.props.y} placeholder="от -3 до 5" onChange={event => this.props.dispatch({
                    type: "MAIN_SET_Y",
                    value: event.target.value.replace(",",".")})}/>
                </div>
                <div className="step">
                <p>Шаг третий - выберите R.</p><br/>
                <InputR/>
                </div>
                <button className="submit-button-main" onClick={()=>this.props.dispatch({
                    type: "MAIN_ADD_POINT",
                    value:{x: this.props.x, y:this.props.y, r:this.props.r}
                })} disabled={this.props.y===""||this.props.y==="-"||this.props.y==="."}>Проверить</button>

                <button className="submit-button-main" onClick={this.exit}>Выйти</button><br/>
                <ResultTable/>
            </div>
            <div className="rightsidebar">
                <CanvasComponent/>
            </div>
            </div>
        </div>
        )
    }


    exit = ()=>{
        this.props.dispatch({type: "APP_LOGOUT", value: {history: this.props.history}});
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.appState.user,
        x: store.mainState.xField,
        y: store.mainState.yField,
        r: store.mainState.rField,
    }
};

export default connect(mapStateToProps)(MainContainer);