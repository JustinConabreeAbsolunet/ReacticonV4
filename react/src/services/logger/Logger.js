class Logger {

	constructor(console) {
		this.console = console || window.console;
	}

	emergency(...parameters) {
		this.log('emergency', ...parameters);
	}

	alert(...parameters) {
		this.log('alert', ...parameters);
	}

	critical(...parameters) {
		this.log('critical', ...parameters);
	}

	error(...parameters) {
		this.log('error', ...parameters);
	}

	warning(...parameters) {
		this.log('warning', ...parameters);
	}

	warn(...parameters) {
		this.warning(...parameters);
	}

	notice(...parameters) {
		this.log('notice', ...parameters);
	}

	info(...parameters) {
		this.log('info', ...parameters);
	}

	debug(...parameters) {
		this.log('debug', ...parameters);
	}

	log(level, ...parameters) {
		if (process.env.NODE_ENV !== 'production') {
			const consoleMethod = this.getConsoleMethodNameFromLevel(level);
			parameters.forEach((parameter) => {
				this.console[consoleMethod](`[${level.toUpperCase()}]`, parameter);
			});
		}
	}

	getConsoleMethodNameFromLevel(level) {
		return {
			alert:     'error',
			critical:  'error',
			debug:     'log',
			emergency: 'error',
			error:     'error',
			info:      'info',
			warning:   'warn',
			notice:    'warn'
		}[level] || 'log';
	}

}

export default Logger;
