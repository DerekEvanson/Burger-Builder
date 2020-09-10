import React from 'react';

import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>MENU</div>
		<Logo />
		<nav>...</nav>
	</header>
);

export default toolbar;
