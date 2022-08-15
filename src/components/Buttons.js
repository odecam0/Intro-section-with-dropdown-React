import React from 'react';
import styled from 'styled-components';

import {ReactComponent as ArrowDown} from '../images/icon-arrow-down.svg';
import {ReactComponent as ArrowUp}   from '../images/icon-arrow-up.svg';

class Button extends React.Component {
    constructor (props) {
	super(props);

	if (props.clickHandler) {
	    this.clickHandler = props.clickHandler.bind(this);
	} else {
	    this.clickHandler = this.clickHandler.bind(this);
	}
    }

    clickHandler () {
	return
    }
    
    render () {
	return (
	    <div className={this.props.className} onClick={this.clickHandler}>
		{this.props.text}
	    </div>
	);
    }
}

export const StyledButton = styled(Button)`
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px;
    border-style: ${props => props.border ? 'solid' : 'none'};
    color: ${props => props.unactive ? 'grey' : 'black'};
    background: white;
    font-weight: inherit;
`;

function Arrow (props) {
    if(props.up){
	return(<ArrowUp className={props.className}/>);
    } else if (props.down) {
	return(<ArrowDown className={props.className} />);
    }
}

const StyledArrow = styled(Arrow)`
    align-self: center;
    margin-left: 10px;
`;

class DropdownButton extends Button {
    constructor (props) {
	super(props);
	this.state = {
	    showDropdown: false
	}

	if(props.DDList){
	    this.DDList = props.DDList;
	} else {
	    this.DDList = 'div';
	};

	this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow () {
	this.setState({showDropdown: !this.state.showDropdown});
    }

    render () {
	return (
	    <div className={this.props.className} onClick={this.toggleShow}>
		{this.props.text}
		{this.state.showDropdown ?
		 <StyledArrow up/> :
		 <StyledArrow down/>}
		{this.state.showDropdown && <this.DDList/>}
	    </div>
	);
    }
}

export const StyledDropdownButton = styled(DropdownButton)`
    display: flex;
    align-items: center;
`;
