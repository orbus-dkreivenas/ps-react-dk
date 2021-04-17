module.exports = [{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from 'react';\r\n\r\n/** SVG Eye Icon */\r\nfunction EyeIcon() {\r\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\r\n  return (\r\n    <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\r\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\r\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\r\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\r\n      </g>\r\n    </svg>\r\n  )\r\n}\r\n\r\nexport default EyeIcon;","examples":[{"name":"Example","description":"","code":"import React from \"react\";\r\nimport EyeIcon from \"ps-react-dk/EyeIcon\";\r\n\r\nexport default function EyeIconExample() {\r\n    return <EyeIcon />;\r\n}"}]},{"name":"HelloWorld","description":"HelloWorld Component.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** HelloWorld Component. */\r\nfunction HelloWorld({message}) {\r\n    return <div>Hello {message}</div>;\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n    /** Message to display */\r\n    message: PropTypes.string\r\n}\r\n\r\nHelloWorld.defaultProps = {\r\n    message: \"World\"\r\n}\r\n\r\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\r\nimport HelloWorld from \"ps-react-dk/HelloWorld\";\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n    return <HelloWorld message=\"people!\" />\r\n}"}]},{"name":"Label","description":"Label component","props":{"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from \"react\";\r\nimport PropTypes from 'prop-types';\r\n\r\n/** Label component */\r\nfunction Label({label, required, htmlFor}) {\r\n    return (\r\n        <label style={{display: \"block\"}} htmlFor={htmlFor} >\r\n            {label} {required && <span style={{color: \"red\"}}> *</span>}\r\n        </label>\r\n    );\r\n}\r\n\r\nLabel.propTypes = {\r\n    /** Label text */\r\n    label: PropTypes.string.isRequired,\r\n\r\n    /** HTML ID for associated input */\r\n    htmlFor: PropTypes.string.isRequired,\r\n\r\n    /** Display asterisk after label if true */\r\n    required: PropTypes.bool,\r\n};\r\n\r\nexport default Label;","examples":[{"name":"ExampleOptional","description":"Optional Label","code":"import React from 'react'\r\nimport Label from 'ps-react-dk/Label'\r\n\r\n/** Optional Label */\r\nexport default function ExampleOptional() {\r\n    return <Label label=\"This is optional label\" htmlFor=\"example\" />\r\n}"},{"name":"ExampleRequired","description":"Required Label","code":"import React from 'react'\r\nimport Label from 'ps-react-dk/Label'\r\n\r\n/** Required Label */\r\nexport default function ExampleOptional() {\r\n    return <Label label=\"This is required label\" htmlFor=\"example\" required={true} />\r\n}"}]},{"name":"ProgressBar","description":"ProgressBar component","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed."},"width":{"type":{"name":"number"},"required":true,"description":"Bar width."},"height":{"type":{"name":"number"},"required":false,"description":"Bar height.","defaultValue":{"value":"5","computed":false}},"colors":{"type":{"name":"shape","value":{"low":{"name":"string","required":false},"half":{"name":"string","required":false},"full":{"name":"string","required":false}}},"required":false,"description":"","defaultValue":{"value":"{ full: \"green\", half: \"lightgreen\", low: \"red\" }","computed":false}}},"code":"import React from \"react\";\r\nimport PropTypes from 'prop-types';\r\n\r\n/** ProgressBar component */\r\nfunction ProgressBar({\r\n    percent, \r\n    width, \r\n    height = 5,\r\n    colors = {} = { full: \"green\", half: \"lightgreen\", low: \"red\" }}) {\r\n    const getColor = () => {\r\n        return percent === 100\r\n            ? colors.full\r\n            : percent > 50\r\n                ? colors.half\r\n                : colors.low;\r\n    };\r\n\r\n    const getWidthAsPercentOfTotalWidth = () => {\r\n        return parseInt(width * (percent / 100), 10);\r\n    };\r\n\r\n    return (\r\n        <div style={{border: 'solid 1px lightgray', width: width}}>\r\n            <div style={{\r\n                width: getWidthAsPercentOfTotalWidth(),\r\n                height,\r\n                backgroundColor: getColor()\r\n            }}>\r\n\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n\r\nProgressBar.propTypes = {\r\n    /** Percent of progress completed. */\r\n    percent: PropTypes.number.isRequired,\r\n    /** Bar width. */\r\n    width: PropTypes.number.isRequired,\r\n    /** Bar height. */\r\n    height: PropTypes.number,\r\n\r\n    colors: PropTypes.shape({\r\n        low: PropTypes.string,\r\n        half: PropTypes.string,\r\n        full: PropTypes.string\r\n    })\r\n};\r\n\r\nexport default ProgressBar;","examples":[{"name":"Example100Percent","description":"100% progress and height 20px and full color blue","code":"import React from 'react'\r\nimport ProgressBar from 'ps-react-dk/ProgressBar'\r\n\r\n/** 100% progress and height 20px and full color blue */\r\nexport default function Example100Percent() {\r\n    return <ProgressBar percent={100} width={150} height={20} colors={{ full: \"blue\" }} />\r\n}"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react'\r\nimport ProgressBar from 'ps-react-dk/ProgressBar'\r\n\r\n/** 10% progress */\r\nexport default function Example10Percent() {\r\n    return <ProgressBar percent={10} width={150} />\r\n}"},{"name":"Example60Percent","description":"60% progress","code":"import React from 'react'\r\nimport ProgressBar from 'ps-react-dk/ProgressBar'\r\n\r\n/** 60% progress */\r\nexport default function Example60Percent() {\r\n    return <ProgressBar percent={60} width={150} />\r\n}"}]}]