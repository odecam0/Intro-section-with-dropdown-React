import React from 'react';
import styled from 'styled-components';

import './App.css';

import {StyledNavigationTab} from './components/NavigationBar.js';
import {StyledIntroPage} from  './components/IntroPage.js';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
	families: ['Epilogue']
    }
});


function App() {
  return (
    <div className="App">
	<StyledNavigationTab/>
	<StyledIntroPage/>
    </div>
  );
};

export default App;
