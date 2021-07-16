import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyle = makeStyles({
    date : {
        margin: '0 2px 0 0',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.17,
        color: '#e6e6e6'
    },
    notCurrMonth : {
        color: "#999999"
    }
})

export default function DateComponent(props){
    const classes = useStyle();
    return(
        <>
             <Typography className={classNames(classes.date, (props.date && !props.date.isCurrMonth) ? classes.notCurrMonth : '')}>{props.date && props.date["displayDate"]}</Typography>
        </>
    )
}