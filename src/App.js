import React from 'react';

import Intro_img_desk from './images/image-hero-desktop.png';
import './App.css';

import {ReactComponent as ArrowDown} from './images/icon-arrow-down.svg';
import {ReactComponent as ArrowUp}   from './images/icon-arrow-up.svg';

import {ReactComponent as CalendarIcon} from './images/icon-calendar.svg';
import {ReactComponent as CloseIcon} from './images/icon-close-menu.svg';
import {ReactComponent as IconIcon} from './images/icon-menu.svg';
import {ReactComponent as PlanningIcon} from './images/icon-planning.svg';
import {ReactComponent as RemindersIcon} from './images/icon-reminders.svg';
import {ReactComponent as TodoIcon} from './images/icon-todo.svg';

class Button extends React.Component {
    constructor (props) {
	super(props);
	let border = props.border ? '2px' : '0px';
	let color = props.unactive ? 'grey' : 'black';

	Object.assign(this.styles.buttom, {borderStyle: 'solid', borderWidth:border});
	Object.assign(this.styles.text, {color: color});

	if (props.clickHandler) {
	    this.clickHandler = props.clickHandler.bind(this);
	} else {
	    this.clickHandler = this.clickHandler.bind(this);
	}
    }

    clickHandler () {
	return
    }

    styles = {
	buttom: {
	    borderRadius: "20px",
	    marginTop: 'auto',
	    marginBottom: 'auto',
	    paddingLeft: '20px',
	    paddingRight: '20px',
	    display: 'flex'
	},

	text: {
	}
    }
    
    render () {
	return (
	    <div style={this.styles.buttom} onClick={this.clickHandler}>
		<p style={this.styles.text}>{this.props.text}</p>
	    </div>
	);
    }
}

class DropdownButton extends Button {
    constructor (props) {
	super(props);

	this.state = {
	    showDropdown: true
	}

	if (props.dropdown_style) {
	    Object.assign(this.dropdown_style, props.dropdown_style);
	}

	if (props.listFunc) {
	    this.listFunc = props.listFunc;
	}

	this.toggleShow = this.toggleShow.bind(this);
	this.dropdownList = this.dropdownList.bind(this);
    }

    // hoverEnter () {
    // 	this.setState({isHovered: true});
    // }

    // hoverLeave () {
    // 	this.setState({isHovered: false});
    // }

    listFunc () {
	return;
    }

    toggleShow () {
	this.setState({showDropdown: !this.state.showDropdown});
    }

    dropdown_style = {
	// height: '100px',
	// width: '100px',
	position: 'absolute',
	boxShadow: '0 0 50px lightgrey',
	top: '100px',
	borderRadius: '20px',
	padding: '20px',
    }

    arrow_style = {
	alignSelf: 'center',
	marginLeft: '10px'
    }

    dropdownList () {
	return (<div style={this.dropdown_style}>
		    {this.listFunc()}
		</div>);
    }

    render () {
	return (
	    <div style={this.styles.buttom}
		 onClick={this.toggleShow}>
		<p style={this.styles.text}>{this.props.text}</p>
		{this.state.showDropdown ? <ArrowUp style={this.arrow_style}/> : <ArrowDown style={this.arrow_style}/>}
		{this.state.showDropdown && this.dropdownList()}
	    </div>
	);
    }
}

function featuresList () {
    const icon_style = {gridColumnStart:1, alignSelf:'center', justifySelf:'center'};
    const text_style = {gridColumnStart:3, alignSelf:'Center', justifySelf:'Start'};
    const div_style  = {display:'grid', gridTemplateColumns:'1fr 1fr 5fr', alignSelf:'center'}
    return (
	<div style={{display:'grid', gridTemplateRows:'repeat(4, 30px)'}}>
	    <div style={{...div_style, gridRowStart:'1'}}>
		<TodoIcon style={icon_style}/><p style={text_style}>Todo List</p>
	    </div>
	    <div style={{...div_style, gridRowStart:'2'}}>
		<CalendarIcon style={icon_style}/><p style={text_style}>Calendar</p>
	    </div>
	    <div style={{...div_style, gridRowStart:'3'}}>
		<RemindersIcon style={icon_style}/><p style={text_style}>Reminders</p>
	    </div>
	    <div style={{...div_style, gridRowStart:'4'}}>
		<PlanningIcon style={icon_style}/><p style={text_style}>Planning</p>
	    </div>
	</div>
    );
}

function companyList () {
    const div_style = {
	display:'grid',
	gridTemplateRows:'repeat(3, 30px)',
	alignItems:'center',
	justifyItems:'start'
    };

    return (
	<div style={div_style}>
	    <p style={{gridRowStart:'1'}}>History</p>
	    <p style={{gridRowStart:'2'}}>Our Team</p>
	    <p style={{gridRowStart:'3'}}>Blog</p>
	</div>
    );
}

class NavigationTab extends React.Component {

    styles = {
	navigation_bar:{
	    display: 'flex',
	    justifyContent: 'space-between',
	    gap: '20px',
	    padding: '20px',
	    margin: '0'
	},
    }

    render () {
	return (
	    <div style={this.styles.navigation_bar}>
		<h1>snap</h1>
		<DropdownButton text="Features" listFunc={featuresList} dropdown_style={{transform:'translateX(-60px)'}}/>
		<DropdownButton text="Company" listFunc={companyList}/>
		<Button text="Careers" unactive={true}/>
		<Button text="About"/> 

		<div style={{flexGrow:1}}/>

		<Button text="Login"/> 
		<Button text="Register" border={true}/> 
	    </div>
	);
    }
}

class IntroPage extends React.Component {
    styles = {
	outer_div: {
	    padding: '20%'
	},
    }
    
    render () {
	return (
	    <div style={this.styles.outer_div}>
		<div/>
		<img src={Intro_img_desk} alt='Person standing up typing on notebook'/>
	    </div>
	);
    }
}

function App() {
  return (
    <div className="App">
	<NavigationTab/>
	<IntroPage/>
    </div>
  );
}

export default App;
