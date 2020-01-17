import React from 'react';
import { Switch, Route} from "react-router-dom";
import "./style.scss"
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import RegisterPage from "./RegisterPage/RegisterPage";


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}


const Header = ()=>{
    return(<div className="header">Лабораторная работа №4.
        Щербаков В.Ю. P3214. <span className="variant"> Вариант 40187.</span>
    </div>)
};
const Footer = ()=>{
    return(<div className="footer">Copyright &copy;ItmoLabs all rights were broken</div>)
};


export default App;
