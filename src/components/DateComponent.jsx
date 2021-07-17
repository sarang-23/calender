import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyle = makeStyles({
    cellContainer : {
        display : 'flex',
        height : 100,
        paddingTop :5,
        paddingBottom : 5,
        alignItems: 'center',
         
    },
    infoContainer:{
        display :'flex',
        flexDirection:'column',
        alignItems: 'start',
        height:'100%',
        width:'100%',
        position: 'relative'
    },
    date : {
        margin: '0 2px 0 0',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.17,
        color: '#e6e6e6',
        paddingTop: 10
    },
    today : {
        height : '80%',
        width : 3,
        backgroundColor: '#0f6ebe',
        borderRadius : 100,
        marginRight : 10        
    },
    notCurrMonth : {
        color: "#999999"
    },
    weekend: {
        fontFamily : 'Poppins',
        fontSize : 10,
        fontWeight : 300,
        color: '#666666',
        position : 'absolute',
        bottom : 20
    }
})

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