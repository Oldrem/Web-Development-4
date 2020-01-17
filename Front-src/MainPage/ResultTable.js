import React from "react";
import {connect} from "react-redux";

class ResultTable extends React.Component{

    render() {
        let result = [];
        let points = this.props.points.concat().sort((a,b)=>b.date-a.date);
        for(let item of points){
            let history = item.pointHistoryElements.concat().sort((a,b)=>b.date-a.date);
            result.push(
                <tr key={item.id}>
                    <td>{this.props.currentPoint===item.id?this.xChange() : history[0].x}</td>
                    <td>{this.props.currentPoint===item.id?this.yChange() : history[0].y}</td>
                    <td>{item.r}</td>
                    <td>{history[0].isCheck ? "Да":"Нет"}</td>
                    <td>{this.props.currentPoint===item.id?this.saveButton(item): formatDate(new Date(item.date))}</td>
                    <td>{this.props.currentPoint===item.id?this.deleteButton(item) :this.changeButton(item)}</td>
                </tr>
            )}
        return(
            <div className="history-block">
                <span className="table-text">Результаты</span>
                <table className="result-table">
                    <thead>
                    <tr>
                        <th>Координата X</th>
                        <th>Координата Y</th>
                        <th>Радиус</th>
                        <th>Попадание</th>
                        <th>Создано</th>
                        <th>Редактирование</th>
                    </tr>
                    </thead>
                    <tbody>{result}</tbody>
                </table>
            </div>
        )
    }
    changeButton = (item)=>(<button className="r-button" onClick={event => {this.props.dispatch({
        type: "MAIN_SET_CURRENT_POINT",
        value: item})}}>Изменить</button>);

    saveButton = (item)=>(<button className="r-button" onClick={event => {
        this.props.dispatch({type: "MAIN_UPDATE_POINT", value: item})}}>Сохранить</button>);

    deleteButton = (item)=>(<button className="r-button" onClick={event => {
        this.props.dispatch({type: "MAIN_DELETE_POINT", value: item})}}>Удалить</button>);

    xChange = ()=>(<input type="text" className="change-input" value={this.props.x} onChange={event => this.props.dispatch({type: "MAIN_SET_CHANGE_X", value: event.target.value})}/>);
    yChange = ()=>(<input type="text" className="change-input" value={this.props.y} onChange={event => this.props.dispatch({type: "MAIN_SET_CHANGE_Y", value: event.target.value})}/>)
}
const mapStateToProps = function(store) {
    return {
        points: store.appState.points,
        currentPoint: store.mainState.currentPoint,
        x:store.mainState.xChange,
        y:store.mainState.yChange
    }
};


const formatDate = (date)=>{
    return `${fill(date.getDay())}.${fill(date.getMonth())}.${fill(date.getFullYear())},\n
     ${fill(date.getHours())}:${fill(date.getMinutes())}:${fill(date.getSeconds())}`
};
const fill = (item)=>{
    return Number(item)<10? "0"+item : ""+item;
};

export default connect(mapStateToProps)(ResultTable)