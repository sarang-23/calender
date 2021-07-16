import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import calenderIcon from '../assets/calenderIcon.svg';
import dropdownIcon from '../assets/dropdownIcon.svg'
import { getMonthName } from '../helper/dateHelper';

const useStyles = makeStyles({
    controller: {
        color: '#e6e6e6',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        margin: '10px 20px',
        borderRadius : 100,
        height :38,
        display : 'flex',
        alignItems : 'center'
    },
    today : {
        float : 'left',
        backgroundColor : '#0f6ebe',
        height : '100%',
        borderRadius : '100px 0 0 100px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        fontFamily: 'Poppins',
        fontSize : 14,
        padding : '0 20px'
    },
    calenderIcon : {
        marginRight: 5
    },
    monthSelector : {
        display : 'flex',
        alignItems : 'center',
        height : '100%',
        padding : '0 15px',
        borderRight : '1px solid black',
        position: 'relative'
    },
    left : {
        transform : 'rotate(180deg)',
        marginRight : 5,
        cursor: 'pointer',
    },
    right : {
        marginLeft : 5,
        cursor: 'pointer'
    },
    selectedMonth: {
        fontSize : 12,
        fontWeight : 500,
        color: '#999999', 
        fontFamily : 'Poppins',
        minWidth : 100
    }
})

export default function Controller(props){
    const classes = useStyles();
    return(
        <>
             <div className={classes.controller}>
                <div className={classes.today}>
                    <img src={calenderIcon} className={classes.calenderIcon}></img>
                    <p>Today</p>
                </div>
                <div className={classes.monthSelector}>
                    <img src={dropdownIcon} className={classes.left} onClick={()=>props.updateMonth('left')}/>
                    <Typography className={classes.selectedMonth}> {getMonthName(props.selectedMonth)} {props.selectedYear} </Typography>
                    <img src={dropdownIcon} className={classes.right} onClick={()=>props.updateMonth('right')}/>

                </div>
            </div>
        </>
    )
}