import {useLocation} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Paper, Container} from '@material-ui/core/'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GetAppIcon from '@material-ui/icons/GetApp'; 
import { IconButton } from '@material-ui/core';
import { useState, useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    test:{
        marginTop: '100px'
    },
    title: {
        padding: 10,
        fontFamily: [
            'Pacifico',
            'cursive'
        ],
        
    },
    downloadLink:{
        textDecoration: 'none',
        color: '#fafafa'
    }
    
}))
const Collection = () => {
    const classes = useStyles()
    const theme = useTheme()
    const {state} = useLocation()
    const size = useMediaQuery(theme.breakpoints.down('sm'))
    const [noImages, setNoImages] = useState(false)
    let columns = 3
    if(size === true){
        columns = 1
    }
// eslint-disable-next-line
    useEffect(()=> {
        if(state.imgs.length === 0){
            setNoImages(true)
        } else{
            setNoImages(false)
        }
    })
    return(
        <Container maxWidth="md">
        <Paper elevation={3} className={classes.test}>
            <h1 className={classes.title}>{state.title}</h1>
            
        </Paper>
        {noImages ? (
<h1>No Images Available</h1>
        ):(
        <GridList cellHeight={500} cols={columns} spacing={12}>
            {state.imgs.map((i) => {
                return(
                    <GridListTile key={i.id} cols={1}>
                        <LazyLoadImage height={500} width={403} src={i.imageurl} alt={i.tags[0]}/>
                        <GridListTileBar title={i.tags[0]} subtitle={<span>Uploaded By: {i.user[0].username}</span>} actionIcon={<IconButton color="secondary"><a href={i.imageurl} className={classes.downloadLink}> <GetAppIcon/></a> </IconButton>}/>
                    </GridListTile>
                )
            })}
            
        </GridList>
        )}
        </Container>
    )
}

export default Collection