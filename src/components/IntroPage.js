import React from 'react';
import styled from 'styled-components';

import Intro_img_desk from '../images/image-hero-desktop.png';

import {ReactComponent as ClientAudiophile} from '../images/client-audiophile.svg';
import {ReactComponent as ClientDatabiz} from '../images/client-databiz.svg';
import {ReactComponent as ClientMaker} from '../images/client-maker.svg';
import {ReactComponent as ClientMeet} from '../images/client-meet.svg';

import {StyledButton} from './Buttons.js';

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

export const StyledIntroPage = styled(IntroPage)`
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
