import {Paper, Container} from '@material-ui/core/'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {useEffect,useState} from 'react'
import axios from 'axios'
import authHeader from '../../services/authheader'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import CircularProgress from '@material-ui/core/CircularProgress';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GetAppIcon from '@material-ui/icons/GetApp'; 
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    profilebox:{
        marginTop: '100px',
        padding: '10px',
        marginBottom: '50px'
    },
    avatar:{
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: 'auto',
        padding: '20px',
    },
    
    spinner:{
        margin:0,
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',

    },
    downloadLink:{
        textDecoration: 'none',
        color: '#fafafa'
    }
}))
const Profile = (props) => {
    const classes = useStyles()
    const [profile, setProfile] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [hasImages, setHasImages] = useState(false)
    const theme = useTheme()
    const size = useMediaQuery(theme.breakpoints.down('sm'))
    let columns = 3
    if(size === true){
        columns = 1
    }
    let user = null
    if(props.isLoggedIn){
        user = JSON.parse(localStorage.getItem('user'))
        
    }
    
    useEffect(() => {
        axios.get('https://imgl.azurewebsites.net/user/' + user.user[0].id, {headers: authHeader()})
        .then(res =>{
            setProfile(res.data)
            console.log(res.data)
            setIsLoading(false)
            if(res.data.images.length === 0){
                setHasImages(true)
            } 
        })
        // eslint-disable-next-line
    },[])
    
    
    return (
        <Container maxWidth="md">
            {isloading ? (
                <CircularProgress className={classes.spinner}/>
            ):(
            <div>
            <Paper elevation={3} className={classes.profilebox}>
                <Avatar alt={profile.username} src={profile.pic} className={classes.avatar}/>
                <Typography variant='h4' gutterBottom>
                    @{profile.username}
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    {profile.email}
                </Typography>
            </Paper>
            {hasImages ? (
                <h5>No Images Found...Start Uploading</h5>
            ):(
            <GridList cellHeight={500} cols={columns} spacing={12}>
            {profile.images.map((i) => {
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
        </Container>

    )
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      message: state.message
    }
  }
export default connect(mapStateToProps) (Profile)