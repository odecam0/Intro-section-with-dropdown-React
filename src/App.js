import React from 'react';
import styled from 'styled-components';

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

import WebFont from 'webfontloader';

WebFont.load({
    google: {
	families: ['Epilogue']
    }
});



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

const StyledButton = styled(Button)`
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 20px;
    padding-right: 20px;
    border: ${props => props.border ? '2px' : '0px'};
    color: ${props => props.unactive ? 'grey' : 'black'};
    background: white;
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

const StyledDropdownButton = styled(DropdownButton)`
    display: flex;
    align-items: center;
`;



function featuresList (props) {
    return (
	<div className={props.className}>
	    <div className='row' number={1}>
		<TodoIcon className='icon'/><p>Todo List</p>
	    </div>
	    <div className='row' number={2}>
		<CalendarIcon className='icon'/><p>Calendar</p>
	    </div>
	    <div className='row' number={3}>
		<RemindersIcon className='icon'/><p>Reminders</p>
	    </div>
	    <div className='row' number={4}>
		<PlanningIcon className='icon'/><p>Planning</p>
	    </div>
	</div>
    );
}

const StyledFeaturesList = styled(featuresList)`
    display: grid;
    grid-template-rows: repeat(4, 30px);
    transform: translateX(-80px);
    position: absolute;
    box-shadow: 0 0 50px lightgrey;
    top: 100px;
    border-radius: 20px;
    padding: 20px;
    background: white;

    .row {
        display: grid;
        grid-template-columns: 1fr 1fr 5fr;
        align-self: center;
        grid-row-start: ${props => props.number}
    }

    .icon, p {
        align-self: center;
    }

    .icon {
        grid-column-start: 1;
        justify-self: center;
    }

    p {
        grid-column-start: 3;
        justify-self: start;
    }
`

function companyList (props) {
    return (
	<div className={props.className}>
	    <p n='1'>History</p>
	    <p n='2'>Our Team</p>
	    <p n='3'>Blog</p>
	</div>
    );
}

const StyledCompanyList = styled(companyList)`
    display: grid;
    grid-template-rows: repeat(3, 30px);
    align-items: center;
    justify-items: start;
    position: absolute;
    box-shadow: 0 0 50px lightgrey;
    top: 100px;
    border-radius: 20px;
    padding: 20px;
    background: white;

    p {
        grid-row-start: ${props => props.n};
    }
`;



function NavigationTab (props) {
    return (
	<div className={props.className}>
	    <h1>snap</h1>
	    <StyledDropdownButton text="Features" DDList={StyledFeaturesList}/>
	    <StyledDropdownButton text="Company" DDList={StyledCompanyList}/>
	    <StyledButton text="Careers" unactive/>
	    <StyledButton text="About"/> 

	    <div style={{flexGrow:1}}/>

	    <StyledButton text="Login"/> 
	    <StyledButton text="Register" border/> 
	</div>
    );
}

const StyledNavigationTab = styled(NavigationTab)`
    display: flex;
    justify-contenct: space-between;
    gap: 20px;
    padding: 20px;
    align-items: center;
`;

class IntroPage extends React.Component {
    styles = {
	outer_div: {
	    padding: '60px',
	    display:'grid',
	    gridTemplateColumns:'repeat(6, 1fr)',
	    gridTemplateRows:'repeat(5, 1fr)',
	    height:'100%'
	},

	image: {
	    width:'100%',
	    height:'100%',
	    gridColumnStart:'5',
	    gridColumnEnd:'7',
	    gridRowStart:'1',
	    gridRowEnd:'6',
	    objectFit:'cover',
	},

	info: {
	    gridColumnStart:'1',
	    gridColumnEnd:'4'
	}
    }
    
    render () {
	return (
	    <div style={this.styles.outer_div}>
		<div style={this.styles.info}>
		    <p>Algo escrito</p>
		</div>
		<img src={Intro_img_desk}
		     style={this.styles.image}
		     alt='Person standing up typing on notebook'/>
	    </div>
	);
    }
}



function App() {
  return (
    <div className="App">
	<StyledNavigationTab/>
	<IntroPage/>
    </div>
  );
}

export default App;
