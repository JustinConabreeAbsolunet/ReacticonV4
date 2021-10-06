<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>Reacticon Demo</title>

        <!-- Favicon and Social meta data -->
        <link rel="icon" type="image/png" href="/media/icons/favicon.png" />

        <style>
            /* latin-ext */
            @font-face {
                font-family: 'Muli';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/muli/v20/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50e6fwniDtzNAAw.woff) format('woff');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Muli';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/muli/v20/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30e6fwniDtzM.woff) format('woff');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Muli';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/muli/v20/7Aulp_0qiz-aVz7u3PJLcUMYOFkQl0k50e6fwniDtzNAAw.woff) format('woff');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Muli';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/muli/v20/7Aulp_0qiz-aVz7u3PJLcUMYOFkQl0k30e6fwniDtzM.woff) format('woff');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Muli';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/muli/v20/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k50e6fwniDtzNAAw.woff) format('woff');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Muli';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/muli/v20/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k30e6fwniDtzM.woff) format('woff');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        </style>

        <!-- Main Scripts -->
        <script src="/js/react/scripts/main.js" async></script>
    </head>
    <body class="antialiased">
        <div id="app" style="position: relative;">
            <noscript>This application requires JavaScript to be enabled to properly work.</noscript>
        </div>
    </body>
</html>
