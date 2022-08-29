import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import Paper from '@mui/material/Paper';
import Handshake from './images/handshake.svg'
import Heart from './images/heart.svg'
import Quality from './images/quality.svg'

const ItemContainer = styled(Paper)(({theme})=>({

    width:"30%",
    height:'30vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        width:"55%",
        margin:'auto',
        marginBottom:'25px',
        hyphens:'auto',

        
    }
}))

const ValueItem = ({icon,title})=>{
    return(
        <ItemContainer elevation={1}>
           <Box sx={{
               backgroundImage: `url(${icon})`,
               height:"30%",
               width:'100%',
               backgroundPositionX:'50%',
               backgroundRepeat:'no-repeat',
            }}/>
            <Typography fontWeight='bold' variant='h5'>{title}</Typography>
        </ItemContainer>
    )
}

const Underline = styled(Box)(({theme})=>({
    backgroundColor:'#6439ff',
    width:'50px',
    height:'5px',
    margin:'auto',
    marginTop:'5px'
}))
function BrandValues() {
  return (
    <Container >
        <Typography variant="h4" align="center" component="h2" sx={{mt:8}}>
      Our Values
    </Typography>
    <Underline/>
    <Container sx={{display:"flex",justifyContent:'space-between',mt:'50px',flexWrap:'wrap',alignContent:'center'}}>
        <ValueItem icon={Handshake} title='Professionalism'/>
        <ValueItem icon={Quality} title='Competence'/>
        <ValueItem icon={Heart} title='Customer satisfaction'/>
    </Container>
    </Container>
  )
}

export default BrandValues