import {useEffect} from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import Container from '@material-ui/core/Container'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import CircularProgress from '@material-ui/core/CircularProgress'
import {connect} from 'react-redux'
import {getAllImgs} from '../../store/actions/imgs'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GetAppIcon from '@material-ui/icons/GetApp'; 
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: '#bdbdbd'
    },
    spinner:{
        margin:0,
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',

    },
    gridTitle:{
        visibility:'hidden',
        '&:hover':{
            visibility:'visible'
        }
    },
    grid:{
        marginTop: '100px'
    },
    downloadLink:{
        textDecoration: 'none',
        color: '#fafafa'
    }
}))

const Home = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    // eslint-disable-next-line
    useEffect(() => props.onAllImgs(),[])
    const size = useMediaQuery(theme.breakpoints.down('sm'))
    let columns = 3
    if(size === true){
        columns = 1
    }
    
    return(
        <div>
        <Container maxWidth="lg" className={classes.grid}>
        <div>
        {props.imgs.loading ? (
            <CircularProgress className={classes.spinner}/>
        ):(
            
         <div>
            {props.imgs.noImages ? (
                <Typography variant="h2">No Images Found...oops</Typography>
            ):(
        <GridList cellHeight={500} cols={columns} spacing={12} >
            {props.imgs.imgs.map((i) => {
                return(
                
                    <GridListTile key={i.id} cols={1}>
                        <LazyLoadImage height={500} width={403} src={i.imageurl} alt={i.tags[0]}/>
                        
                    <GridListTileBar title={i.tags[0]} subtitle={<span>Uploaded By: {i.user[0].username}</span>} actionIcon={<IconButton color="secondary"><a href={i.imageurl} className={classes.downloadLink}> <GetAppIcon/></a> </IconButton>}/>
                    </GridListTile>
                   
                )
            })}
            
        </GridList>
            )}
        </div>
        )}
        </div>  
        </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        imgs: state.imgs,
        loading: state.loading,
        noImages: state.noImages

    }
}
const mapDispatchToProps = dispatch => {
    return{
        onAllImgs: () => dispatch(getAllImgs())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home)