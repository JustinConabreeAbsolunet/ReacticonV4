<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Reacticon Demo - Server Rendered</title>
        @php
            sleep(5);
        @endphp
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>Reacticon Demo</title>

        <!-- Favicon and Social meta data -->
        <link rel="icon" type="image/png" href="/media/icons/favicon.png">

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
        <style data-jss="" data-meta="MuiGrid">
            .jss125 {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
            }
            .jss126 {
                margin: 0;
                box-sizing: border-box;
            }
            .jss127 {
                min-width: 0;
            }
            .jss128 {
                flex-direction: column;
            }
            .jss129 {
                flex-direction: column-reverse;
            }
            .jss130 {
                flex-direction: row-reverse;
            }
            .jss131 {
                flex-wrap: nowrap;
            }
            .jss132 {
                flex-wrap: wrap-reverse;
            }
            .jss133 {
                align-items: center;
            }
            .jss134 {
                align-items: flex-start;
            }
            .jss135 {
                align-items: flex-end;
            }
            .jss136 {
                align-items: baseline;
            }
            .jss137 {
                align-content: center;
            }
            .jss138 {
                align-content: flex-start;
            }
            .jss139 {
                align-content: flex-end;
            }
            .jss140 {
                align-content: space-between;
            }
            .jss141 {
                align-content: space-around;
            }
            .jss142 {
                justify-content: center;
            }
            .jss143 {
                justify-content: flex-end;
            }
            .jss144 {
                justify-content: space-between;
            }
            .jss145 {
                justify-content: space-around;
            }
            .jss146 {
                justify-content: space-evenly;
            }
            .jss147 {
                width: calc(100% + 8px);
                margin: -4px;
            }
            .jss147 > .jss126 {
                padding: 4px;
            }
            .jss148 {
                width: calc(100% + 16px);
                margin: -8px;
            }
            .jss148 > .jss126 {
                padding: 8px;
            }
            .jss149 {
                width: calc(100% + 24px);
                margin: -12px;
            }
            .jss149 > .jss126 {
                padding: 12px;
            }
            .jss150 {
                width: calc(100% + 32px);
                margin: -16px;
            }
            .jss150 > .jss126 {
                padding: 16px;
            }
            .jss151 {
                width: calc(100% + 40px);
                margin: -20px;
            }
            .jss151 > .jss126 {
                padding: 20px;
            }
            .jss152 {
                width: calc(100% + 48px);
                margin: -24px;
            }
            .jss152 > .jss126 {
                padding: 24px;
            }
            .jss153 {
                width: calc(100% + 56px);
                margin: -28px;
            }
            .jss153 > .jss126 {
                padding: 28px;
            }
            .jss154 {
                width: calc(100% + 64px);
                margin: -32px;
            }
            .jss154 > .jss126 {
                padding: 32px;
            }
            .jss155 {
                width: calc(100% + 72px);
                margin: -36px;
            }
            .jss155 > .jss126 {
                padding: 36px;
            }
            .jss156 {
                width: calc(100% + 80px);
                margin: -40px;
            }
            .jss156 > .jss126 {
                padding: 40px;
            }
            .jss157 {
                flex-grow: 0;
                max-width: none;
                flex-basis: auto;
            }
            .jss158 {
                flex-grow: 1;
                max-width: 100%;
                flex-basis: 0;
            }
            .jss159 {
                flex-grow: 0;
                max-width: 8.333333%;
                flex-basis: 8.333333%;
            }
            .jss160 {
                flex-grow: 0;
                max-width: 16.666667%;
                flex-basis: 16.666667%;
            }
            .jss161 {
                flex-grow: 0;
                max-width: 25%;
                flex-basis: 25%;
            }
            .jss162 {
                flex-grow: 0;
                max-width: 33.333333%;
                flex-basis: 33.333333%;
            }
            .jss163 {
                flex-grow: 0;
                max-width: 41.666667%;
                flex-basis: 41.666667%;
            }
            .jss164 {
                flex-grow: 0;
                max-width: 50%;
                flex-basis: 50%;
            }
            .jss165 {
                flex-grow: 0;
                max-width: 58.333333%;
                flex-basis: 58.333333%;
            }
            .jss166 {
                flex-grow: 0;
                max-width: 66.666667%;
                flex-basis: 66.666667%;
            }
            .jss167 {
                flex-grow: 0;
                max-width: 75%;
                flex-basis: 75%;
            }
            .jss168 {
                flex-grow: 0;
                max-width: 83.333333%;
                flex-basis: 83.333333%;
            }
            .jss169 {
                flex-grow: 0;
                max-width: 91.666667%;
                flex-basis: 91.666667%;
            }
            .jss170 {
                flex-grow: 0;
                max-width: 100%;
                flex-basis: 100%;
            }
            @media (min-width:600px) {
                .jss171 {
                    flex-grow: 0;
                    max-width: none;
                    flex-basis: auto;
                }
                .jss172 {
                    flex-grow: 1;
                    max-width: 100%;
                    flex-basis: 0;
                }
                .jss173 {
                    flex-grow: 0;
                    max-width: 8.333333%;
                    flex-basis: 8.333333%;
                }
                .jss174 {
                    flex-grow: 0;
                    max-width: 16.666667%;
                    flex-basis: 16.666667%;
                }
                .jss175 {
                    flex-grow: 0;
                    max-width: 25%;
                    flex-basis: 25%;
                }
                .jss176 {
                    flex-grow: 0;
                    max-width: 33.333333%;
                    flex-basis: 33.333333%;
                }
                .jss177 {
                    flex-grow: 0;
                    max-width: 41.666667%;
                    flex-basis: 41.666667%;
                }
                .jss178 {
                    flex-grow: 0;
                    max-width: 50%;
                    flex-basis: 50%;
                }
                .jss179 {
                    flex-grow: 0;
                    max-width: 58.333333%;
                    flex-basis: 58.333333%;
                }
                .jss180 {
                    flex-grow: 0;
                    max-width: 66.666667%;
                    flex-basis: 66.666667%;
                }
                .jss181 {
                    flex-grow: 0;
                    max-width: 75%;
                    flex-basis: 75%;
                }
                .jss182 {
                    flex-grow: 0;
                    max-width: 83.333333%;
                    flex-basis: 83.333333%;
                }
                .jss183 {
                    flex-grow: 0;
                    max-width: 91.666667%;
                    flex-basis: 91.666667%;
                }
                .jss184 {
                    flex-grow: 0;
                    max-width: 100%;
                    flex-basis: 100%;
                }
            }
            @media (min-width:960px) {
                .jss185 {
                    flex-grow: 0;
                    max-width: none;
                    flex-basis: auto;
                }
                .jss186 {
                    flex-grow: 1;
                    max-width: 100%;
                    flex-basis: 0;
                }
                .jss187 {
                    flex-grow: 0;
                    max-width: 8.333333%;
                    flex-basis: 8.333333%;
                }
                .jss188 {
                    flex-grow: 0;
                    max-width: 16.666667%;
                    flex-basis: 16.666667%;
                }
                .jss189 {
                    flex-grow: 0;
                    max-width: 25%;
                    flex-basis: 25%;
                }
                .jss190 {
                    flex-grow: 0;
                    max-width: 33.333333%;
                    flex-basis: 33.333333%;
                }
                .jss191 {
                    flex-grow: 0;
                    max-width: 41.666667%;
                    flex-basis: 41.666667%;
                }
                .jss192 {
                    flex-grow: 0;
                    max-width: 50%;
                    flex-basis: 50%;
                }
                .jss193 {
                    flex-grow: 0;
                    max-width: 58.333333%;
                    flex-basis: 58.333333%;
                }
                .jss194 {
                    flex-grow: 0;
                    max-width: 66.666667%;
                    flex-basis: 66.666667%;
                }
                .jss195 {
                    flex-grow: 0;
                    max-width: 75%;
                    flex-basis: 75%;
                }
                .jss196 {
                    flex-grow: 0;
                    max-width: 83.333333%;
                    flex-basis: 83.333333%;
                }
                .jss197 {
                    flex-grow: 0;
                    max-width: 91.666667%;
                    flex-basis: 91.666667%;
                }
                .jss198 {
                    flex-grow: 0;
                    max-width: 100%;
                    flex-basis: 100%;
                }
            }
            @media (min-width:1280px) {
                .jss199 {
                    flex-grow: 0;
                    max-width: none;
                    flex-basis: auto;
                }
                .jss200 {
                    flex-grow: 1;
                    max-width: 100%;
                    flex-basis: 0;
                }
                .jss201 {
                    flex-grow: 0;
                    max-width: 8.333333%;
                    flex-basis: 8.333333%;
                }
                .jss202 {
                    flex-grow: 0;
                    max-width: 16.666667%;
                    flex-basis: 16.666667%;
                }
                .jss203 {
                    flex-grow: 0;
                    max-width: 25%;
                    flex-basis: 25%;
                }
                .jss204 {
                    flex-grow: 0;
                    max-width: 33.333333%;
                    flex-basis: 33.333333%;
                }
                .jss205 {
                    flex-grow: 0;
                    max-width: 41.666667%;
                    flex-basis: 41.666667%;
                }
                .jss206 {
                    flex-grow: 0;
                    max-width: 50%;
                    flex-basis: 50%;
                }
                .jss207 {
                    flex-grow: 0;
                    max-width: 58.333333%;
                    flex-basis: 58.333333%;
                }
                .jss208 {
                    flex-grow: 0;
                    max-width: 66.666667%;
                    flex-basis: 66.666667%;
                }
                .jss209 {
                    flex-grow: 0;
                    max-width: 75%;
                    flex-basis: 75%;
                }
                .jss210 {
                    flex-grow: 0;
                    max-width: 83.333333%;
                    flex-basis: 83.333333%;
                }
                .jss211 {
                    flex-grow: 0;
                    max-width: 91.666667%;
                    flex-basis: 91.666667%;
                }
                .jss212 {
                    flex-grow: 0;
                    max-width: 100%;
                    flex-basis: 100%;
                }
            }
            @media (min-width:1920px) {
                .jss213 {
                    flex-grow: 0;
                    max-width: none;
                    flex-basis: auto;
                }
                .jss214 {
                    flex-grow: 1;
                    max-width: 100%;
                    flex-basis: 0;
                }
                .jss215 {
                    flex-grow: 0;
                    max-width: 8.333333%;
                    flex-basis: 8.333333%;
                }
                .jss216 {
                    flex-grow: 0;
                    max-width: 16.666667%;
                    flex-basis: 16.666667%;
                }
                .jss217 {
                    flex-grow: 0;
                    max-width: 25%;
                    flex-basis: 25%;
                }
                .jss218 {
                    flex-grow: 0;
                    max-width: 33.333333%;
                    flex-basis: 33.333333%;
                }
                .jss219 {
                    flex-grow: 0;
                    max-width: 41.666667%;
                    flex-basis: 41.666667%;
                }
                .jss220 {
                    flex-grow: 0;
                    max-width: 50%;
                    flex-basis: 50%;
                }
                .jss221 {
                    flex-grow: 0;
                    max-width: 58.333333%;
                    flex-basis: 58.333333%;
                }
                .jss222 {
                    flex-grow: 0;
                    max-width: 66.666667%;
                    flex-basis: 66.666667%;
                }
                .jss223 {
                    flex-grow: 0;
                    max-width: 75%;
                    flex-basis: 75%;
                }
                .jss224 {
                    flex-grow: 0;
                    max-width: 83.333333%;
                    flex-basis: 83.333333%;
                }
                .jss225 {
                    flex-grow: 0;
                    max-width: 91.666667%;
                    flex-basis: 91.666667%;
                }
                .jss226 {
                    flex-grow: 0;
                    max-width: 100%;
                    flex-basis: 100%;
                }
            }
        </style><style data-jss="" data-meta="MuiTypography">
            .jss86 {
                margin: 0;
            }
            .jss87 {
                font-size: 0.875rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.43;
            }
            .jss88 {
                font-size: 1rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.5;
            }
            .jss89 {
                font-size: 0.75rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.66;
            }
            .jss90 {
                font-size: 0.875rem;
                font-family: "Muli", sans-serif;
                font-weight: 500;
                line-height: 1.75;
                text-transform: uppercase;
            }
            .jss91 {
                color: #737373;
                font-size: 3rem;
                font-family: "Muli", sans-serif;
                font-weight: 500;
                line-height: 1.167;
            }
            .jss92 {
                font-size: 3.75rem;
                font-family: "Muli", sans-serif;
                font-weight: 300;
                line-height: 1.2;
            }
            .jss93 {
                color: #315977;
                font-size: 2rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.167;
            }
            .jss94 {
                font-size: 2.125rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.235;
            }
            .jss95 {
                font-size: 1.5rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.334;
            }
            .jss96 {
                font-size: 1.25rem;
                font-family: "Muli", sans-serif;
                font-weight: 500;
                line-height: 1.6;
            }
            .jss97 {
                font-size: 1rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.75;
            }
            .jss98 {
                font-size: 0.875rem;
                font-family: "Muli", sans-serif;
                font-weight: 500;
                line-height: 1.57;
            }
            .jss99 {
                font-size: 0.75rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 2.66;
                text-transform: uppercase;
            }
            .jss100 {
                width: 1px;
                height: 1px;
                overflow: hidden;
                position: absolute;
            }
            .jss101 {
                text-align: left;
            }
            .jss102 {
                text-align: center;
            }
            .jss103 {
                text-align: right;
            }
            .jss104 {
                text-align: justify;
            }
            .jss105 {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .jss106 {
                margin-bottom: 0.35em;
            }
            .jss107 {
                margin-bottom: 16px;
            }
            .jss108 {
                color: inherit;
            }
            .jss109 {
                color: #315977;
            }
            .jss110 {
                color: #16a085;
            }
            .jss111 {
                color: rgba(0, 0, 0, 0.87);
            }
            .jss112 {
                color: rgba(0, 0, 0, 0.54);
            }
            .jss113 {
                color: #f44336;
            }
            .jss114 {
                display: inline;
            }
            .jss115 {
                display: block;
            }
        </style><style data-jss="" data-meta="MuiButtonBase">
            .jss293 {
                color: inherit;
                border: 0;
                cursor: pointer;
                margin: 0;
                display: inline-flex;
                outline: 0;
                padding: 0;
                position: relative;
                align-items: center;
                user-select: none;
                border-radius: 0;
                vertical-align: middle;
                -moz-appearance: none;
                justify-content: center;
                text-decoration: none;
                background-color: transparent;
                -webkit-appearance: none;
                -webkit-tap-highlight-color: transparent;
            }
            .jss293::-moz-focus-inner {
                border-style: none;
            }
            .jss293.jss294 {
                cursor: default;
                pointer-events: none;
            }
            @media print {
                .jss293 {
                    -webkit-print-color-adjust: exact;
                }
            }
        </style><style data-jss="" data-meta="MuiPaper">
            .jss22 {
                color: rgba(0, 0, 0, 0.87);
                transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                background-color: #FFFFFF;
            }
            .jss23 {
                border-radius: 0;
            }
            .jss24 {
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            .jss25 {
                box-shadow: none;
            }
            .jss26 {
                box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
            }
            .jss27 {
                box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
            }
            .jss28 {
                box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
            }
            .jss29 {
                box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
            }
            .jss30 {
                box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
            }
            .jss31 {
                box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
            }
            .jss32 {
                box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
            }
            .jss33 {
                box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
            }
            .jss34 {
                box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
            }
            .jss35 {
                box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
            }
            .jss36 {
                box-shadow: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
            }
            .jss37 {
                box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
            }
            .jss38 {
                box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
            }
            .jss39 {
                box-shadow: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
            }
            .jss40 {
                box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
            }
            .jss41 {
                box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
            }
            .jss42 {
                box-shadow: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
            }
            .jss43 {
                box-shadow: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
            }
            .jss44 {
                box-shadow: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
            }
            .jss45 {
                box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
            }
            .jss46 {
                box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
            }
            .jss47 {
                box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
            }
            .jss48 {
                box-shadow: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
            }
            .jss49 {
                box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
            }
        </style><style data-jss="" data-meta="MuiCard">
            .jss257 {
                overflow: hidden;
            }
        </style><style data-jss="" data-meta="MuiCardActions">
            .jss262 {
                display: flex;
                padding: 8px;
                align-items: center;
            }
            .jss263 > :not(:first-child) {
                margin-left: 8px;
            }
        </style><style data-jss="" data-meta="MuiCardContent">
            .jss261 {
                padding: 16px;
            }
            .jss261:last-child {
                padding-bottom: 24px;
            }
        </style><style data-jss="" data-meta="MuiCardMedia">
            .jss258 {
                display: block;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            .jss259 {
                width: 100%;
            }
            .jss260 {
                object-fit: cover;
            }
        </style><style data-jss="" data-meta="MuiButton">
            .jss264 {
                color: rgba(0, 0, 0, 0.87);
                padding: .5em 1em;
                font-size: 0.875rem;
                min-width: 64px;
                box-sizing: border-box;
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                font-family: "Muli", sans-serif;
                font-weight: 500;
                line-height: 1.75;
                border-radius: 4px;
                text-transform: none;
            }
            .jss264:hover {
                text-decoration: none;
                background-color: rgba(0, 0, 0, 0.04);
            }
            .jss264.jss277 {
                color: #737373;
                border: 1px solid #E4E4E4;
            }
            @media (hover: none) {
                .jss264:hover {
                    background-color: transparent;
                }
            }
            .jss264:hover.jss277 {
                background-color: transparent;
            }
            .jss265 {
                width: 100%;
                display: inherit;
                align-items: inherit;
                justify-content: inherit;
            }
            .jss266 {
                padding: 6px 8px;
            }
            .jss266.jss277 {
                border: 0;
            }
            .jss267 {
                color: #315977;
            }
            .jss267:hover {
                background-color: rgba(49, 89, 119, 0.04);
            }
            @media (hover: none) {
                .jss267:hover {
                    background-color: transparent;
                }
            }
            .jss268 {
                color: #16a085;
            }
            .jss268:hover {
                background-color: rgba(22, 160, 133, 0.04);
            }
            @media (hover: none) {
                .jss268:hover {
                    background-color: transparent;
                }
            }
            .jss269 {
                border: 1px solid rgba(0, 0, 0, 0.23);
                padding: 5px 15px;
            }
            .jss269.jss277 {
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            .jss270 {
                color: #315977;
                border: 1px solid rgba(49, 89, 119, 0.5);
            }
            .jss270:hover {
                border: 1px solid #315977;
                background-color: rgba(49, 89, 119, 0.04);
            }
            @media (hover: none) {
                .jss270:hover {
                    background-color: transparent;
                }
            }
            .jss271 {
                color: #16a085;
                border: 1px solid rgba(22, 160, 133, 0.5);
            }
            .jss271:hover {
                border: 1px solid #16a085;
                background-color: rgba(22, 160, 133, 0.04);
            }
            .jss271.jss277 {
                border: 1px solid rgba(0, 0, 0, 0.26);
            }
            @media (hover: none) {
                .jss271:hover {
                    background-color: transparent;
                }
            }
            .jss272 {
                color: rgba(0, 0, 0, 0.87);
                box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
                background-color: #e0e0e0;
            }
            .jss272:hover {
                box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
                background-color: #d5d5d5;
            }
            .jss272.jss276 {
                box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
            }
            .jss272:active {
                box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
            }
            .jss272.jss277 {
                color: rgba(0, 0, 0, 0.26);
                box-shadow: none;
                background-color: rgba(0, 0, 0, 0.12);
            }
            @media (hover: none) {
                .jss272:hover {
                    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
                    background-color: #e0e0e0;
                }
            }
            .jss272:hover.jss277 {
                background-color: rgba(0, 0, 0, 0.12);
            }
            .jss273 {
                color: #FFFFFF;
                border: 1px solid #315977;
                background-color: #315977;
            }
            .jss273:hover {
                background-color: #737373;
            }
            .jss273:hover, .jss273:active, .jss273:focus {
                color: #FFFFFF;
                border: 1px solid #18374e;
                background-color: #18374e;
            }
            .jss273:focus {
                outline: 2px solid #315977;
                outline-offset: 5px;
            }
            @media (hover: none) {
                .jss273:hover {
                    background-color: #315977;
                }
            }
            .jss274 {
                color: #000000;
                border: 1px solid #737373;
                background-color: #FFFFFF;
            }
            .jss274:hover {
                background-color: #000000;
            }
            .jss274:hover, .jss274:active, .jss274:focus {
                color: #000000;
                background-color: #AEAFAF;
            }
            .jss274:focus {
                outline: 2px solid #000000;
                outline-offset: 5px;
            }
            @media (hover: none) {
                .jss274:hover {
                    background-color: #16a085;
                }
            }
            .jss275 {
                box-shadow: none;
            }
            .jss275:hover {
                box-shadow: none;
            }
            .jss275.jss276 {
                box-shadow: none;
            }
            .jss275:active {
                box-shadow: none;
            }
            .jss275.jss277 {
                box-shadow: none;
            }
            .jss278 {
                color: inherit;
                border-color: currentColor;
            }
            .jss279 {
                padding: 4px 5px;
                font-size: 0.8125rem;
            }
            .jss280 {
                padding: 8px 11px;
                font-size: 0.9375rem;
            }
            .jss281 {
                padding: 3px 9px;
                font-size: 0.8125rem;
            }
            .jss282 {
                padding: 7px 21px;
                font-size: 0.9375rem;
            }
            .jss283 {
                padding: 4px 10px;
                font-size: 0.8125rem;
            }
            .jss284 {
                padding: 8px 22px;
                font-size: 0.9375rem;
            }
            .jss287 {
                width: 100%;
            }
            .jss288 {
                display: inherit;
                margin-left: -4px;
                margin-right: 8px;
            }
            .jss288.jss290 {
                margin-left: -2px;
            }
            .jss289 {
                display: inherit;
                margin-left: 8px;
                margin-right: -4px;
            }
            .jss289.jss290 {
                margin-right: -2px;
            }
            .jss290 > *:first-child {
                font-size: 18px;
            }
            .jss291 > *:first-child {
                font-size: 20px;
            }
            .jss292 > *:first-child {
                font-size: 22px;
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss256 {
                margin: 0 auto;
                padding: 16px;
                max-width: 1400px;
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss121 {
                width: 100%;
                max-width: none !important;
            }
            .jss122 {
                width: 100%;
                display: flex;
                min-height: calc(40vh - 80px);
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            .jss123 {
                text-align: center;
            }
        </style><style data-jss="" data-meta="MuiContainer">
            .jss50 {
                width: 100%;
                display: block;
                box-sizing: border-box;
                margin-left: auto;
                margin-right: auto;
                padding-left: 16px;
                padding-right: 16px;
            }
            @media (min-width:600px) {
                .jss50 {
                    padding-left: 24px;
                    padding-right: 24px;
                }
            }
            .jss51 {
                padding-left: 0;
                padding-right: 0;
            }
            @media (min-width:600px) {
                .jss52 {
                    max-width: 600px;
                }
            }
            @media (min-width:960px) {
                .jss52 {
                    max-width: 960px;
                }
            }
            @media (min-width:1280px) {
                .jss52 {
                    max-width: 1280px;
                }
            }
            @media (min-width:1920px) {
                .jss52 {
                    max-width: 1920px;
                }
            }
            @media (min-width:0px) {
                .jss53 {
                    max-width: 444px;
                }
            }
            @media (min-width:600px) {
                .jss54 {
                    max-width: 600px;
                }
            }
            @media (min-width:960px) {
                .jss55 {
                    max-width: 960px;
                }
            }
            @media (min-width:1280px) {
                .jss56 {
                    max-width: 1280px;
                }
            }
            @media (min-width:1920px) {
                .jss57 {
                    max-width: 1920px;
                }
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss228 {
                left: 0;
                bottom: 0;
                padding: 8px;
                z-index: 1400;
                position: fixed;
            }
        </style><style data-jss="" data-meta="MuiAppBar">
            .jss11 {
                width: 100%;
                display: flex;
                z-index: 1100;
                box-sizing: border-box;
                flex-shrink: 0;
                flex-direction: column;
            }
            .jss12 {
                top: 0;
                left: auto;
                right: 0;
                position: fixed;
            }
            @media print {
                .jss12 {
                    position: absolute;
                }
            }
            .jss13 {
                top: 0;
                left: auto;
                right: 0;
                position: absolute;
            }
            .jss14 {
                top: 0;
                left: auto;
                right: 0;
                position: sticky;
            }
            .jss15 {
                position: static;
            }
            .jss16 {
                position: relative;
            }
            .jss17 {
                color: rgba(0, 0, 0, 0.87);
                background-color: #f5f5f5;
            }
            .jss18 {
                color: #fff;
                background-color: #315977;
            }
            .jss19 {
                color: #fff;
                background-color: #16a085;
            }
            .jss20 {
                color: inherit;
            }
            .jss21 {
                color: inherit;
                background-color: transparent;
            }
        </style><style data-jss="" data-meta="MuiToolbar">
            .jss58 {
                display: flex;
                position: relative;
                align-items: center;
            }
            .jss59 {
                padding-left: 16px;
                padding-right: 16px;
            }
            @media (min-width:600px) {
                .jss59 {
                    padding-left: 24px;
                    padding-right: 24px;
                }
            }
            .jss60 {
                min-height: 56px;
            }
            @media (min-width:0px) and (orientation: landscape) {
                .jss60 {
                    min-height: 48px;
                }
            }
            @media (min-width:600px) {
                .jss60 {
                    min-height: 64px;
                }
            }
            .jss61 {
                min-height: 48px;
            }
        </style><style data-jss="" data-meta="MuiList">
            .jss229 {
                margin: 0;
                padding: 0;
                position: relative;
                list-style: none;
            }
            .jss230 {
                padding-top: 8px;
                padding-bottom: 8px;
            }
            .jss232 {
                padding-top: 0;
            }
        </style><style data-jss="" data-meta="MuiListItem">
            .jss233 {
                width: 100%;
                display: flex;
                position: relative;
                box-sizing: border-box;
                text-align: left;
                align-items: center;
                padding-top: 8px;
                padding-bottom: 8px;
                justify-content: flex-start;
                text-decoration: none;
            }
            .jss233.jss235 {
                background-color: rgba(0, 0, 0, 0.08);
            }
            .jss233.jss243, .jss233.jss243:hover {
                background-color: transparent;
            }
            .jss233.jss238 {
                opacity: 0.5;
            }
            .jss234 {
                position: relative;
            }
            .jss236 {
                padding-top: 4px;
                padding-bottom: 4px;
            }
            .jss237 {
                align-items: flex-start;
            }
            .jss239 {
                border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                background-clip: padding-box;
            }
            .jss240 {
                padding-left: 16px;
                padding-right: 16px;
            }
            .jss241 {
                transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            .jss241:hover {
                text-decoration: none;
                background-color: rgba(0, 0, 0, 0.04);
            }
            @media (hover: none) {
                .jss241:hover {
                    background-color: transparent;
                }
            }
            .jss242 {
                padding-right: 48px;
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss116 {
                display: flex;
                padding: 0;
                margin-left: 5em;
            }
            .jss117 {
                margin: 0 2em;
            }
            .jss118 {
                color: #737373;
                padding: 1.5em 0;
                transition: all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
                border-bottom: 4px solid #FFFFFF;
            }
            .jss118:hover {
                color: #315977;
                border-bottom: 4px solid #315977;
            }
            .jss119 {
                color: #315977;
                border-bottom: 4px solid #315977;
                background-color: transparent;
            }
        </style><style data-jss="" data-meta="MuiDrawer">
            .jss75 {
                flex: 0 0 auto;
            }
            .jss76 {
                top: 0;
                flex: 1 0 auto;
                height: 100%;
                display: flex;
                outline: 0;
                z-index: 1200;
                position: fixed;
                overflow-y: auto;
                flex-direction: column;
                -webkit-overflow-scrolling: touch;
            }
            .jss77 {
                left: 0;
                right: auto;
            }
            .jss78 {
                left: auto;
                right: 0;
            }
            .jss79 {
                top: 0;
                left: 0;
                right: 0;
                bottom: auto;
                height: auto;
                max-height: 100%;
            }
            .jss80 {
                top: auto;
                left: 0;
                right: 0;
                bottom: 0;
                height: auto;
                max-height: 100%;
            }
            .jss81 {
                border-right: 1px solid rgba(0, 0, 0, 0.12);
            }
            .jss82 {
                border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            }
            .jss83 {
                border-left: 1px solid rgba(0, 0, 0, 0.12);
            }
            .jss84 {
                border-top: 1px solid rgba(0, 0, 0, 0.12);
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss62 {
                width: 270px;
                flex-shrink: 0;
                white-space: nowrap;
            }
            .jss63 {
                top: 56px;
            }
            .jss64 {
                top: 56px !important;
                width: 270px;
                transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
            }
            .jss65 {
                top: 56px !important;
                width: 0;
                overflow-x: hidden;
                transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
            }
            .jss66 {
                border: none;
                height: calc(100vh - 56px);
                box-shadow: 9px 10px 8px -8px rgba(115,116,115,0.15);
                background-color: #FFFFFF;
            }
            .jss67 {
                padding: 0;
            }
            .jss68 {
                border-left: 4px solid #AEAFAF;
                border-bottom: 1px solid #AEAFAF;
            }
            .jss69 {
                border-left: 4px solid #315977;
            }
            .jss70 {
                color: #000000;
                height: 2em;
                font-size: 1.3em;
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            .jss70:hover {
                color: #315977;
            }
            .jss71 {
                color: #737373;
                transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            .jss71:active {
                color: #315977;
            }
            .jss72 {
                padding: 0;
            }
            .jss73 {
                display: none;
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss120 {
                left: 0;
                width: 100%;
                bottom: -5px;
                z-index: 10;
                position: absolute;
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss4 {
                padding: 0;
                z-index: 1201;
                box-shadow: 9px 10px 8px -8px rgba(115,116,115,0.15);
                background-color: #fff;
            }
            .jss5 {
                position: relative;
                max-width: none;
            }
            .jss6 {
                padding: 0;
            }
            .jss7 {
                text-decoration: none;
            }
            .jss8 {
                height: 32px;
                display: flex;
                font-size: 1.5rem;
                font-weight: 600;
            }
            .jss9 {
                flex-grow: 1;
            }
            .jss10 {
                width: 100%;
                min-height: 60px;
            }
            @media (min-width:1280px) {
                .jss10 {
                    min-height: 70px;
                }
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss227 {
                padding: 16px;
                box-shadow: -4px -9px 8px -8px rgb(115 116 115 / 15%);
            }
        </style><style data-jss="" data-meta="makeStyles">
            .jss1 {
                display: flex;
            }
            .jss2 {
                width: 100%;
                flex-grow: 1;
            }
            .jss3 {
                padding: 0;
                flex-grow: 1;
                max-width: none;
            }
        </style><style data-jss="" data-meta="MuiCssBaseline">
            html {
                box-sizing: border-box;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            *, *::before, *::after {
                box-sizing: inherit;
            }
            strong, b {
                font-weight: 700;
            }
            body {
                color: rgba(0, 0, 0, 0.87);
                margin: 0;
                font-size: 0.875rem;
                font-family: "Muli", sans-serif;
                font-weight: 400;
                line-height: 1.43;
                background-color: #FFFFFF;
            }
            @media print {
                body {
                    background-color: #fff;
                }
            }
            body::backdrop {
                background-color: #FFFFFF;
            }
        </style>
    </head>
    <body class="antialiased">
    <div id="app" style="position: relative;">
        <div class="jss1">
            <div class="jss2">
                <header class="jss22 jss11 jss12 jss19 jss4 mui-fixed jss29">
                    <div class="jss50 jss5 jss56">
                        <div class="jss58 jss61 jss6 jss59">
                            <a class="jss7" href="/">
                                <h1 class="jss86 jss8 jss91">Reacticon Demo</h1>
                            </a>
                            <div class="jss9"></div>
                            <nav>
                                <ul class="jss229 jss116 jss230">
                                    <li class="jss117">
                                        <a class="jss233 jss118 jss240" href="/">
                                            <p class="jss86 jss88">Home</p>
                                        </a>
                                    </li>
                                    <li class="jss117">
                                        <a class="jss233 jss118 jss240" href="/shimmer">
                                            <p class="jss86 jss88">Shimmer</p>
                                        </a>
                                    </li>
                                    <li class="jss117">
                                        <a class="jss233 jss118 jss240 jss243 jss119" href="/static-route">
                                            <p class="jss86 jss88">Static</p>
                                        </a>
                                    </li>
                                    <li class="jss117">
                                        <a class="jss233 jss118 jss240" href="/dynamic-route">
                                            <p class="jss86 jss88">Dynamic</p>
                                        </a>
                                    </li>
                                    <li class="jss117">
                                        <a class="jss233 jss118 jss240" href="/predictive">
                                            <p class="jss86 jss88">Predictive</p>
                                        </a>
                                    </li>
                                    <li class="jss117">
                                        <a class="jss233 jss118 jss240" href="/delayed">
                                            <p class="jss86 jss88">Delayed</p>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <div class="jss10"></div>
                <main class="jss50 jss3 jss56">
                    <div class="jss124 jss121 jss125 jss133 jss142">
                        <div class="jss124 jss122 jss126 jss170">
                            <div>
                                <h1 class="jss86 jss123 jss91">Server Rendered</h1>
                            </div>
                        </div>
                        <div class="jss124 jss126 jss170">
                            <div class="jss124 jss256 jss125 jss148 jss133 jss142">
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 1 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 1</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 2 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 2</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 3 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 3</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 4 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 4</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 5 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 5</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 6 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 6</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 7 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 7</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 8 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 8</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 9 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 9</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 10 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 10</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 11 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 11</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                                <div class="jss124 jss126 jss160 jss189 jss204">
                                    <div class="jss22 jss257 jss26 jss23">
                                        <img class="jss258 jss259 jss260" src="/media/product_image.jpg" height="350" alt="Item 12 Image">
                                        <div class="jss261">
                                            <div class="jss86 jss95 jss106">Item 12</div>
                                        </div>
                                        <div class="jss262 jss263"><button class="jss293 jss264 jss272 jss283 jss285 jss275 jss287" tabindex="0" type="button"><span class="jss265">Add to Cart</span></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="jss227">
                    <div class="jss124">
                        <div class="jss124 jss126">
                            <p class="jss86 jss87 jss112 jss102">Copyright © &nbsp; Absolunet &nbsp;2021.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <div class="jss228"></div>
    </div>
    </body>
</html>
