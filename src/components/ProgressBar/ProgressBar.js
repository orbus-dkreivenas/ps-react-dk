import React from "react";
import PropTypes from 'prop-types';

/** ProgressBar component */
function ProgressBar({
    percent, 
    width, 
    height = 5,
    colors = {} = { full: "green", half: "lightgreen", low: "red" }}) {
    const getColor = () => {
        return percent === 100
            ? colors.full
            : percent > 50
                ? colors.half
                : colors.low;
    };

    const getWidthAsPercentOfTotalWidth = () => {
        return parseInt(width * (percent / 100), 10);
    };

    return (
        <div style={{border: 'solid 1px lightgray', width: width}}>
            <div style={{
                width: getWidthAsPercentOfTotalWidth(),
                height,
                backgroundColor: getColor()
            }}>

            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    /** Percent of progress completed. */
    percent: PropTypes.number.isRequired,
    /** Bar width. */
    width: PropTypes.number.isRequired,
    /** Bar height. */
    height: PropTypes.number,

    colors: PropTypes.shape({
        low: PropTypes.string,
        half: PropTypes.string,
        full: PropTypes.string
    })
};

export default ProgressBar;