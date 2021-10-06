import React, { useMemo } from 'react';
import PropTypes          from 'prop-types';
import clsx               from 'clsx';
import Button             from '@material-ui/core/Button';
import makeStyles         from '@material-ui/core/styles/makeStyles';
import childrenPropType   from '../../../models/propTypes/children';
import styles             from './style';


const useStyles = makeStyles(styles);

const TextButton = ({ classes, className, labelClassName, ...props }) => {
	const styleClasses    = useStyles();
	const combinedClasses = useMemo(() => {
		const combined = {
			...classes
		};

		combined.root  = clsx(styleClasses.button, className, combined.root);
		combined.label = clsx(styleClasses.label, labelClassName, combined.label);

		return combined;
	}, [classes, className]);

	return (
		<Button {...props} classes={combinedClasses} />
	);
};


TextButton.propTypes = {
	children: childrenPropType.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	classes: PropTypes.objectOf(PropTypes.string),
	labelClassName: PropTypes.string
};

TextButton.defaultProps = {
	className: null,
	classes: {},
	labelClassName: null
};


export default TextButton;
