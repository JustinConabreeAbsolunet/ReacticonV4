const fs                       = require('@absolunet/fss');
const mix                      = require('laravel-mix');
const webpack                  = require('webpack');
const path                     = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
require('laravel-mix-eslint');


const BUNDLE_NAME = 'site';


const bundlePath = path.join('bundles', BUNDLE_NAME);
const bundleData = fs.readYaml(path.join(__dirname, bundlePath, 'config', 'bundle.yaml'));
const outputPath = path.join(bundlePath, bundleData.output);
const reportPath = path.join(__dirname, 'reports', Date.now().toString());

const konstanPath            = path.join(__dirname, 'konstan.json');
const konstanDestinationPath = path.join(bundlePath, bundleData.konstanOutput, 'konstan.json');

mix
	.webpackConfig({
		watchOptions: {
			poll: 3000,
			ignored: /node_modules/
		},
		plugins: [
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			...(process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin({
				analyzerMode:      'static',
				reportFilename:    path.join(reportPath, 'report.html'),
				openAnalyzer:      false,
				generateStatsFile: false
			})] : [])
		],
		resolve: {
			alias: {
				'~konstan': konstanPath
			}
		},
		output:  {
			pathinfo: false
		}
	})
	.setResourceRoot(bundleData.url)
	.setPublicPath(outputPath)
	.react(
		path.join(bundlePath, 'scripts', 'main.js'),
		path.join(bundlePath, bundleData.output, 'scripts')
	)
	.eslint()
	.then(() => {
		fs.unlink(path.join(__dirname, outputPath, 'mix-manifest.json'));
		fs.copyFile(konstanPath, konstanDestinationPath);
	})
	;
