import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import IconLogo from 'assets/icons/IconLogo.png';

const useStyles = createUseStyles((theme) => ({
    container: {
        marginLeft: 32,
        marginRight: 32
       
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue,
        opacity: 0.7,
        marginLeft: 12
    },
    logo: {
        height: 70, 
        width: 'auto', 
        margin: '0 10px', 
    },
}));

function LogoComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <Row className={classes.container} horizontal='center' vertical='center'>
      <img src={IconLogo} alt='Logo' className={classes.logo} />          
   <span className={classes.title}></span>
        </Row>
    );
}

export default LogoComponent;
