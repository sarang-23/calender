export const getTableStyles = (theme) => {
    return {
        calenderContainer:{
            margin: '20px auto',
            //width : '80%',
            backgroundColor: '#121212',
            padding :10,
        },
    
        calenderTable:{
            padding: '22px 8px',
            color: 'white',
            
        },
        calenderHead:{
            backgroundColor: '#121212',
            color: '#999999'
        },
        headCell:{
            borderBottom: 'none',
        },
        bodyCell:{
            borderBottom: 'none',
            borderRight: '1px',
            width: 176,
            height: 100,
            color: '#e6e6e6',
            padding : 0,
            paddingLeft: 10,
            '&.evenRow':{
                    '&:nth-child(even)':{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)'
                    }
            },
            '&.oddRow':{
                '&:nth-child(odd)':{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)'
                }
        }
        },
        days:{
            fontFamily: 'Poppins',
            fontSize: 14,
            fontWeight: 'normal',
            fontStretch : 'normal',
            fontStyle: 'normal',
            lineHeight: 1.29,
            letterSpacing: 0.6,
            color: '#999999'
        }
    }
}