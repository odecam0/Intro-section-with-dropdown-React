import React from 'react';
import styled from 'styled-components';

import {StyledButton, StyledDropdownButton} from './Buttons.js';

import {ReactComponent as Logo} from '../images/logo.svg';

import {ReactComponent as CalendarIcon} from '../images/icon-calendar.svg';
import {ReactComponent as CloseIcon} from '../images/icon-close-menu.svg';
import {ReactComponent as IconIcon} from '../images/icon-menu.svg';
import {ReactComponent as PlanningIcon} from '../images/icon-planning.svg';
import {ReactComponent as RemindersIcon} from '../images/icon-reminders.svg';
import {ReactComponent as TodoIcon} from '../images/icon-todo.svg';

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

export const StyledNavigationTab = styled(NavigationTab)`
    display: flex;
    justify-contenct: space-between;
    gap: 20px;
    padding: 20px;
    align-items: center;

    .grow{
        flex-grow: 1;
    }
`;
