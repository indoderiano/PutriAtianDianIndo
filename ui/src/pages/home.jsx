import React, { Component } from 'react'
import {Grid,Button, Typography,Box,Link} from '@material-ui/core'
// import {Link} from 'react-router-dom'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container style={{height:'100vh',padding:'0',margin:'0',width:'100%'}}>
                    <Grid item xs={6} style={{background:'rgba(0,0,0,.7)',padding:'0',alignItems:'center',display:'flex'}}>
                        <Button href='/register' variant="contained" style={{margin:'0 auto',padding:'1em 2em',fontSize:'24px'}}>Sign Up</Button>
                    </Grid>
                    <Grid item xs={6} style={{background:'rgba(0,0,0,.3)',padding:'0',alignItems:'center',display:'flex'}}>
                    <Button href='/login' variant="contained" style={{margin:'0 auto',padding:'1em 2em',fontSize:'24px'}} color='primary'>Login</Button>
                    </Grid>
                </Grid>
                <Box style={{position:'fixed',top:'20vh',width:'100%',textAlign:'center'}}>
                    <Typography component={'span'} 
                        style={{fontSize:'30px',color:'rgba(0,0,0,.8)',textAlign:'center',background:'rgba(0,0,0,.2)',padding:'20px',borderRadius:'4px'}}>
                        Project by Puti Atian Dian Indo
                    </Typography>
                </Box>
            </div>
         );
    }
}
 
export default Home;