import React, {MouseEventHandler, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./Modal/Modal";
import {Simulate} from "react-dom/test-utils";


function App() {

    const [isShowing, setIsShowing] = useState(false);
    const openModal = () => {
        setIsShowing(true);
        copyToClipboard();
    };
    useEffect(() =>  {
        if(isShowing) {
            const notiTimer = setTimeout(() => {
                setIsShowing(false);
            }, 3000);
            return () => clearTimeout(notiTimer);
        }
    }, [isShowing]);

    return (
        <div className={"App"}>
            <h1>멀티그라운드에 오신 것을 환영합니다!</h1>
            <h2>Welcome to MultiGround!</h2>
            <p/>
            <p>서버 주소: giftshower.games</p>
            <p>서버 버전: 1.17.1-MultiGround</p>
            <div>
                <button className={"btn"}>런처 다운로드하기</button>
                &nbsp;
                <button className={"btn"} onClick={openModal}>주소 복사하기</button>
            </div>
            <div>{isShowing && <Modal message="서버 주소 복사 완료!" />}</div>
            <div className={"navbar"}>
                <a href="">Home</a>
                <a href="https://github.com/MultiGround">GitHub</a>
            </div>
        </div>
    );
}

const copyToClipboard = () =>{
    navigator.clipboard.writeText("giftshower.games");
}

export default App;
