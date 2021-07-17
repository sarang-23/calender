import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { getDateStyles } from '../helper/styleHelper';

const useStyle = makeStyles(getDateStyles())

export default function DateComponent(props){
    const classes = useStyle();
    return(
        props.date ?
        <div className={classNames(classes.cellContainer, props.date.isCurrDate ? 'today' : '')}>
            
            {props.date.isCurrDate && <div className={classes.today}/>}
            <div className={classes.infoContainer}>
                <Typography className={classNames(classes.date, !props.date.isCurrMonth ? classes.notCurrMonth : '', props.date.isCurrDate ? 'today' : '')}>{props.date["displayDate"]}</Typography>
                {props.date.isWeekend &&
                <div className={classes.weekend}>Weekly Off</div>}
            </div>
        </div> :
        <>
        </>
    )
}