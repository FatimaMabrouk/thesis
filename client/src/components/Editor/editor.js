import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../SideMenu/sideMenu';
import  './Editor.css';
import FixedNavbar from '../Navbar/FixedNavbar'


class Editor extends Component {

    styles(styles) {
        return styles.map(style => `${style.property}:${style.value}`).join('; ');
    }

    createNode({element, content, style, classList}) {
        let node = document.createElement(element);
        let textNode = document.createTextNode(content);
        node.classList = classList.join(' ');
        node.contentEditable='true';
        node.onInput = e => console.log('Text inside div', e.currentTarget.textContent)
        node.setAttribute('style', this.styles(style));
        node.appendChild(textNode);
        return node;
    }

    createElement(element) {
        let elt = this.createNode(element);
        element.children.map(childNode => {
            elt.appendChild(this.createNode(childNode));
        });
        return elt;
    }

    componentDidMount() {
        this.props.elements.map((element, i) => {
            document.getElementById("editor").appendChild(this.createElement(element));   
        });
    }

    render() {
        return (
            <div>
                <FixedNavbar/>
                    <div className="row" style={{paddingTop:"10px"}}>
                    <SideMenu />
                <div className=" col-md-11" id="editor" >
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    elements: state.elements.elements
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
