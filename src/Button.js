import React, {Component} from 'react';
import './colors.css';
import './Button.css';
import PropTypes from "prop-types";

const SIZES = ['btn--wide', 'btn--large', 'btn--medium', 'btn--small'];
const COLOR = ['primary', 'black', 'blue-grey', 'grey', 'brown', 'deep-orange', 'red', 'amber', 'orange', 'lime', 'light-green', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'deep-purple', 'purple', 'pink', 'dark-elegant', 'yellow'];
const BORDER_COLOR = ['primary-border', 'black-border', 'blue-grey-border', 'grey-border', 'brown-border', 'deep-orange-border', 'red-border', 'amber-border', 'orange-border', 'lime-border', 'light-green-border', 'green-border', 'teal-border', 'cyan-border', 'light-blue-border', 'blue-border', 'indigo-border', 'deep-purple-border', 'purple-border', 'pink-border', 'dark-elegant-border', 'yellow-border'];
const VARIANT = ['btn--solid', 'btn--outline', 'btn--link', 'btn--solidRounded', 'btn--outlineRounded'];

export const Button = ({children, buttonSize, buttonColor, buttonVariant, buttonBorderColor}) => {
	const checkButtonVariant = VARIANT.includes(buttonVariant) ? buttonVariant : VARIANT[0]; 
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
	const checkButtonBorder = BORDER_COLOR.includes(buttonBorderColor) ? buttonBorderColor : null;
	return(
		<button className = {`${checkButtonVariant} ${checkButtonSize} ${checkButtonColor} ${checkButtonBorder}`} >{children} </button>
	);
};

export const IconButton = ({children, buttonSize, buttonColor, buttonVariant, buttonBorderColor, leftIcon, rightIcon}) => {
	const checkButtonVariant = VARIANT.includes(buttonVariant) ? buttonVariant : VARIANT[0]; 
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
	const checkButtonBorder = BORDER_COLOR.includes(buttonBorderColor) ? buttonBorderColor : null;
	const checkLeftIcon = leftIcon ? leftIcon + " leftIcon" : null;
	const checkRightIcon = rightIcon ? rightIcon + " rightIcon" : null;
	return(
		<button className = {`${checkButtonVariant} ${checkButtonSize} ${checkButtonColor} ${checkButtonBorder}`}><i className={`fa ${checkLeftIcon} ${checkRightIcon}`}></i>{children}</button>
	);
};

