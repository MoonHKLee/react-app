import React, {Component} from 'react';
import Toc from "./components/Toc"
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="World Wide Web!!"></Subject>
                <Toc href1="HTML" href2="CSS" href3="JavaScript"></Toc>
                <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;
