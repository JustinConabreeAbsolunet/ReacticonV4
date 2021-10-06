import React      from 'react';
import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import styles     from './style';

const useStyles = makeStyles(styles);

export default () => {
	const classes = useStyles();

	return (
		<Grid
			container
			className={classes.root}
			justifyContent="center"
			alignItems="center"
			spacing={0}
		>
			<Grid item className={classes.header} xs={12}>
				<div className={classes.headerContent}>
					<Typography variant="h1" className={classes.headerText}>Absolunet</Typography>
					<Typography variant="h3" className={classes.headerText}>x</Typography>
					<Typography variant="h1" className={classes.headerText}>Adobe</Typography>
					<Typography variant="h3" className={classes.headerText}>@</Typography>
					<Typography variant="h1" className={classes.headerText}>Reacticon</Typography>
				</div>
			</Grid>
			<Grid item xs={12} className={classes.section}>
				<Typography
					variant="h1"
					className={classes.sectionHeader}
				>
					Improving Perceived Performance in SPAs
				</Typography>
				<Typography
					variant="h3"
					className={classes.sectionLabel}
				>
					Github
				</Typography>
				<a
					href="https://github.com/JustinConabreeAbsolunet/ReacticonV4"
					className={classes.sectionLink}
				>
					JustinConabreeAbsolunet/ReacticonV4
				</a>
				<Typography
					variant="h3"
					className={classes.sectionLabel}
				>
					Presentation
				</Typography>
				<a
					href="https://docs.google.com/presentation/d/1T9Ak2ipD2NiBx64wXB-OWX5LnHJ6dfarvxC6OdeMSlQ/edit?usp=sharing"
					className={classes.sectionLink}
				>
					Google Slides
				</a>
			</Grid>
		</Grid>
	);
};
