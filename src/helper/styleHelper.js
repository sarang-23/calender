export const getTableStyles = (theme) => {
    return {
        calenderContainer:{
            margin: '20px auto',
            width : '90%',
            backgroundColor: '#121212',
            padding :10,
        },
    
        calenderTable:{
            padding: '22px 8px',            
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

export const getDateStyles = (theme) => {
    return {
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
    }
}