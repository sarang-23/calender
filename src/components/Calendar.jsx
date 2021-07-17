import React from 'react';
import { Paper, Table, TableBody, TableRow, TableCell, TableHead, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Controller from './Controller';
import DateComponent from './DateComponent';
import { getTableStyles } from '../helper/styleHelper';
import { getDaysArr } from '../helper/dateHelper';
import { COLUMNS, DAYS, FIRST_MONTH_INDEX, LAST_MONTH_INDEX, ROWS } from '../helper/constants';

const styles = theme => ( getTableStyles(theme) );


class Calendar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            daysArr : [],
            isTablet : window.outerWidth <=700 && window.outerWidth >450,
            isMoblie : window.outerWidth <=450
        }
    }
    
    componentDidMount(){
        var dt = new Date();
        var month = dt.getMonth();
        var year = dt.getFullYear();
        let isTablet = (window.outerWidth <=700 && window.outerWidth >450);
        let isMobile = (window.outerWidth <= 450);
        this.setState({
            ...this.state,
            selectedDay : dt, 
            selectedMonth : month,
            selectedYear : year,
            daysArr : getDaysArr(month, year),
            isMobile,
            isTablet
        })
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        let isTablet = (window.outerWidth <=700 && window.outerWidth >450);
        let isMobile = (window.outerWidth <= 450);
        if (isTablet !== this.state.isTablet) {
            this.setState({
                ...this.state,
                isTablet});
        }
        if (isMobile !== this.state.isMobile) {
            this.setState({
                ...this.state,
                isMobile});
        }
    }

    updateMonth(direction){
        let isFirstMonth = this.state.selectedMonth === FIRST_MONTH_INDEX;
        let isLastMonth = this.state.selectedMonth === LAST_MONTH_INDEX;
        if(direction === 'left'){               
            let selectedMonth = isFirstMonth ? LAST_MONTH_INDEX : this.state.selectedMonth - 1;
            let selectedYear = isFirstMonth ? this.state.selectedYear - 1 : this.state.selectedYear;
            let daysArr = getDaysArr(selectedMonth, selectedYear);
                this.setState((state)=>{
                    return{
                        ...state,
                        selectedMonth, 
                        selectedYear,
                        daysArr
                    }
                });
        } else {
            let selectedMonth = isLastMonth ? FIRST_MONTH_INDEX : this.state.selectedMonth + 1;
            let selectedYear = isLastMonth ? this.state.selectedYear + 1 : this.state.selectedYear;
            let daysArr = getDaysArr(selectedMonth, selectedYear)
            this.setState((state) => {
                return {
                    ...state, 
                    selectedMonth,
                    selectedYear,
                    daysArr
                }
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render(){
        let { classes } = this.props;
        let { selectedMonth, selectedYear, daysArr, isMobile, isTablet } = this.state;
        return(
            <>
                <Paper className={classes.calenderContainer}>
                   <Controller selectedMonth = {selectedMonth} selectedYear={selectedYear} updateMonth={(dir)=>this.updateMonth(dir)}/>
                    <Table className={classes.calenderTable}>
                        <TableHead className={classes.calenderHead}>
                                <TableRow className={classes.calenderRow}>
                                    {
                                        DAYS.map((day, index)=> (
                                            <TableCell align="center" className={classes.headCell} key={index}>
                                                <Typography className={classes.days}>{isMobile ? day.toUpperCase().substr(0,1) : isTablet ? day.toUpperCase().substring(0,3) : day.toUpperCase() }</Typography> 
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.calenderBody}>
                                {
                                    ROWS.map((row)=>(
                                        <TableRow className={classes.calenderRow} key={row}>
                                            {COLUMNS.map((col) => (
                                                <TableCell key ={col+row} className={classNames(classes.bodyCell, row%2 == 0 ? 'evenRow' : 'oddRow')}>
                                                    <DateComponent date={daysArr[row*7 + col]}/>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                    </Table>
                </Paper>
            </>
        )
    }
}

export default withStyles(styles)(Calendar); 