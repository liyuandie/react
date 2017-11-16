import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom';
import styled from 'styled-components';
import {TodosAll,TodosActive,TodosCompleted} from './Todos.jsx';


const LogoutBtn = styled.button`
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    font-weight: 500;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    user-select: none;
    color: rgba(0,0,0,.65);
`
const AuthP = styled.p`
    text-align: right;
`
const TodoLogin = styled.section`
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`
const TodoappH1 = styled.h1`
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 60px;
    font-weight: 200;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    text-rendering: optimizeLegibility;
    :matches(article, aside, nav, section) {
        font-size: 1.5em;
        -webkit-margin-before: 0.83em;
        -webkit-margin-after: 0.83em;
}
`
const Input = styled.input`
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    outline: none;
    color: inherit;
    box-sizing: border-box;
    font-smoothing: antialiased;
`
const LoginBtn = styled.button`
    padding: 0 15px;
    margin: 10px 40%;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    font-weight: 500;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    user-select: none;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9;  
`

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            password: '',
            hasLogin: false,
        };
    }

    setUser = (e) => {
        this.setState({ user: e.currentTarget.value })
    }

    setPassword = (e) => {
        this.setState({ password: e.currentTarget.value });
    }

    login = () => {
        if (this.state.user === '' || this.state.password === '') {
            alert("请输入完整的用户名和密码！");
            return;
        }
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", this.state.user);
        fakeAuth.login(() => {
            this.setState({ hasLogin: true })
        })
    }

    render() {
        let from = { pathname: '/' };
        
        if (this.state.hasLogin) {
            return (<Redirect to={from} />);
        }
        return (
            <TodoLogin>
                <TodoappH1>Log in please! </TodoappH1>
                <Input type="text" placeholder="请输入帐号" value={this.state.username} onChange={this.setUser} />
                <Input type="password" placeholder="请输入密码" value={this.state.password} onChange={this.setPassword} />
                <LoginBtn type="button" onClick={this.login}>登录</LoginBtn>
            </TodoLogin>
        );
    }
}

const fakeAuth = {
    login(cb) {
        setTimeout(cb, 100)
    },
    signout(cb) {
        localStorage.setItem("isLogin", "false");
        setTimeout(cb, 100)
    }
}

const AuthBtn = withRouter(({ history }) => {
    let user = localStorage.getItem('username')
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    return (
        isLogin ? (
            <AuthP>
                {user},welcome!<LogoutBtn type="button" onClick={() => {
                    fakeAuth.signout(() => history.push('/'))
                }}>退出登录</LogoutBtn>
            </AuthP>
        ) : (
                <AuthP>请登录</AuthP>
            )
    )
})
const PrivateRoute = ({ component: Component, ...rest }) => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    return (
        <Route {...rest} render={props => (
            isLogin ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }} />
                )
        )} />
    )
}


class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route component={AuthBtn} />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={TodosAll} />
                        <PrivateRoute path="/all" component={TodosAll} />
                        <PrivateRoute path="/active" component={TodosActive} />
                        <PrivateRoute path="/completed" component={TodosCompleted} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default Home;