import React from "react";
import {connect} from "react-redux";

class InputR extends React.Component{
    render() {
        return(
            <table className="input-table">
                <tr>
                    <td>
                        <input type="radio" value="0.5" name="r" id="r_0.5"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 0.5} />
                        <label htmlFor="r_0.5">0.5</label>
                    </td>
                    <td>
                        <input type="radio" value="1" name="r" id="r_1"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 1} />
                        <label htmlFor="r_1">1</label>
                    </td>
                    <td>
                        <input type="radio" value="1.5" name="r" id="r_1.5"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 1.5} />
                        <label htmlFor="r_1.5">1.5</label>
                    </td>
                    <td>
                        <input type="radio" value="2" name="r" id="r_2"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 2} />
                        <label htmlFor="r_2">2</label>
                    </td>
                    <td>
                        <input type="radio" value="2.5" name="r" id="r_2.5"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 2.5} />
                        <label htmlFor="r_2.5">2.5</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" value="3" name="r" id="r_3"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 3} />
                        <label htmlFor="r_3">3</label>
                    </td>
                    <td>
                        <input type="radio" value="3.5" name="r" id="r_3.5"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 3.5} />
                        <label htmlFor="r_3.5">3.5</label>
                    </td>
                    <td>
                        <input type="radio" value="4" name="r" id="r_4"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 4} />
                        <label htmlFor="r_4">4</label>
                    </td>
                    <td>
                        <input type="radio" value="4.5" name="r" id="r_4.5"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 4.5} />
                        <label htmlFor="r_4.5">4.5</label>
                    </td>
                    <td>
                        <input type="radio" value="5" name="r" id="r_5"
                               onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}
                               checked={this.props.r === 5} />
                        <label htmlFor="r_5">5</label>
                    </td>
                </tr>
            </table>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        r: store.mainState.rField,
    }
};

export default connect(mapStateToProps)(InputR)