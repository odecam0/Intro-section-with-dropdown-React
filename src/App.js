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

import {ReactComponent as ClientAudiophile} from './images/client-audiophile.svg';
import {ReactComponent as ClientDatabiz} from './images/client-databiz.svg';
import {ReactComponent as ClientMaker} from './images/client-maker.svg';
import {ReactComponent as ClientMeet} from './images/client-meet.svg';

import {ReactComponent as Logo} from './images/logo.svg';

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
	    <Logo/>
	    <StyledDropdownButton text="Features" DDList={StyledFeaturesList}/>
	    <StyledDropdownButton text="Company" DDList={StyledCompanyList}/>
	    <StyledButton text="Careers" unactive/>
	    <StyledButton text="About"/> 

	    <div className='grow'/>

	    <StyledButton text="Login"/> 
	    <StyledButton text="Register" border /> 
	</div>
    );
}

const StyledNavigationTab = styled(NavigationTab)`
    display: flex;
    justify-contenct: space-between;
    gap: 20px;
    padding: 20px;
    align-items: center;

    .grow{
        flex-grow: 1;
    }
`;

function IntroPage (props) {
    return (
	<div className={props.className}>
	    <p className='info title'>Make<br/>remote work</p>
	    <p className='info description'>
		Get your team in sync, no matter your location.<br/>
		Streamline processes, create team rituals, and <br/>
		and watch productivity soar.
	    </p>
	    <StyledButton className='info button' border text='Learn more'/>
	    <div className='info client_div'>
		<ClientAudiophile/>
		<ClientDatabiz/>
		<ClientMaker/>
		<ClientMeet/>
	    </div>
	    <img className='image' src={Intro_img_desk}
		 alt='Person standing up typing on notebook'/>
	</div>
    );
}

const StyledIntroPage = styled(IntroPage)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding-left: 10%;
    padding-right: 10%;
    height: 80vh;
    justify-items: start;
    align-items: start;
    column-gap: 20px;

    .info {
        grid-column-start: 1;
        grid-column-end: 1;
    }

    .title {
        font-size: 80px;
        font-weight: 900;
        text-shadow: 2px 0;
        grid-row-start: 2;
    }

    .description {
        color: hsl(0, 0%, 41%);
        grid-row-start: 3;
        font-size: 16px;
    }

    .button{
        grid-row-start: 4;
        border-width: 0.5px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 20px;
        place-self: start;
    }

    .client_div {
        display: flex;
        justify-self: stretch;
        align-self: center;
        justify-content: space-between;
        grid-row-start: 6;
    }

    .image {
        height: 100%;
        width: 100%;
        object-fit: contain;
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 7;
    }
`;

function App() {
  return (
    <div className="App">
	<StyledNavigationTab/>
	<StyledIntroPage/>
    </div>
  );
};

export default App;
