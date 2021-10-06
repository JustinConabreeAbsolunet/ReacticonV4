import React          from 'react';
import { useHistory } from 'react-router';
import makeStyles     from '@material-ui/core/styles/makeStyles';
import Typography     from '@material-ui/core/Typography';
import Button         from '@material-ui/core/Button';
import style          from './style';


const useStyles = makeStyles(style);

const NotFoundPage = () => {
	const classes = useStyles();
	const history = useHistory();

	const goBack = (event) => {
		event.preventDefault();
		history.goBack();
	};

	return (
		<div className={classes.notFoundWrapper}>
			<Typography
				variant="h1"
				component="h1"
				className={classes.notFoundTitle}
			>
				404
			</Typography>
			<Typography
				variant="body1"
				component="h3"
				className={classes.notFoundText}
			>
				<span className={classes.notFoundEmphasis}>
					Oops!
				</span>
				The page you are looking for could not be found.
			</Typography>
			<Button
				aria-label="Go back"
				color="primary"
				onClick={goBack}
			>
				Go back
			</Button>
		</div>
	);
};

export default NotFoundPage;
