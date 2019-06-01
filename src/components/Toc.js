import React , {Component} from 'react';

class Toc extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">{this.props.href1}</a></li>
                    <li><a href="2.html">{this.props.href2}</a></li>
                    <li><a href="3.html">{this.props.href3}</a></li>
                </ul>
            </nav>
        );
    }
}

export default Toc;