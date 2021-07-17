import React from 'react';
import { Paper, Table, TableBody, TableRow, TableCell, TableHead, Typography } from '@material-ui/core'
import { createTheme, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Controller from './Controller';
import DateComponent from './DateComponent';
import { getTableStyles } from '../helper/styleHelper';
import { getDaysArr } from '../helper/dateHelper';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 800,
        lg: 1280,
        xl: 1920,
      },
    },
  })

const styles = theme => ( getTableStyles(theme) );


class Calender extends React.Component{

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
        let isFirstMonth = this.state.selectedMonth === 0;
        let isLastMonth = this.state.selectedMonth === 11;
        if(direction === 'left'){               
            let selectedMonth = isFirstMonth ? 11 : this.state.selectedMonth - 1;
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
            let selectedMonth = isLastMonth ? 0 : this.state.selectedMonth + 1;
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

    render(){
        let { classes } = this.props;
        let { selectedMonth, selectedYear, daysArr, isMobile, isTablet } = this.state;
        let rows = [0,1,2,3,4,5];
        let columns = [1,2,3,4,5,6,7];
        let days = ['Monday' ,'Tuesday' , 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return(
            <>
                <Paper className={classes.calenderContainer}>
                   <Controller selectedMonth = {selectedMonth} selectedYear={selectedYear} updateMonth={(dir)=>this.updateMonth(dir)}/>
                    <Table className={classes.calenderTable}>
                        <TableHead className={classes.calenderHead}>
                                <TableRow className={classes.calenderRow}>
                                    {
                                        days.map((day, index)=> (
                                            <TableCell align="center" className={classes.headCell} key={index}>
                                                <Typography className={classes.days}>{isMobile ? day.toUpperCase().substr(0,1) : isTablet ? day.toUpperCase().substring(0,3) : day.toUpperCase() }</Typography> 
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.calenderBody}>
                                {
                                    rows.map((row)=>(
                                        <TableRow className={classes.calenderRow} key={row}>
                                            {columns.map((col) => (
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

export default withStyles(styles)(Calender); 