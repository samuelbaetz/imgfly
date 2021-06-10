import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import {fade, makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Drawer from '@material-ui/core/Drawer'
import {useState, useEffect} from 'react'
import UserService from '../../services/user.service'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import {connect} from 'react-redux'
import {login} from '../../store/actions/auth'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {getTags, getAllImgs} from '../../store/actions/imgs'
import Dropzone from 'react-dropzone'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {logout} from '../../store/actions/auth'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import DrawerList from '../DrawerList'
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {

        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block'
        },
        fontFamily: [
            'Pacifico',
            'cursive'
        ],
    },
    search: {
        position: 'relative',
        display: 'flex',
        flexGrow: 5,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(4),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: '#fafafa'
    },
    inputInput:{
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }

    },
    drawer: {
        width: 300,
        maxWidth: 360
    },
    subheader:{
        color: '#212121'
    },
    grow: {
        flexGrow: 1
    },
    loginButtons:{
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block'
        }
    },
    loginFields: {
        margin: 3,
        padding: 9,
    },
    loginContent:{
        justifyContent: 'center'
    },
    uploadButton:{
        backgroundColor: '#43a047',
        
    },
    accountButton:{
        marginLeft: theme.spacing(4)
    },
    dropspace:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',
        marginBottom: 10  
    },
    collectionSelect:{
        width: '100%',
        marginTop: 3
    },
    titleLink: {
        textDecoration: 'none',
        color:'#fafafa'
    },
    uploadSpinner:{
        padding: '50px',
        overflow: 'hidden'
    },
    profileLink:{
        textDecoration: 'none',
        color: '#212121'
    },
    uploadDialog:{
        overflow:'hidden'
    },
    margin:{
        margin: 10
    }
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const Nav = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [registerOpen, setRegisterOpen] = useState(false)
    const [collections, setCollections] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [upload, setUpload] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [newCollection, setNewCollection] = useState(false)
    const [collection, setCollection] = useState("")
    const [collectsuccess, setCollectSuccess] = useState(false)
    const [collecterror, setCollectError] = useState(false)
    const [file, setFile] = useState(null)
    const [selectedCollection, setSelectedCollection] = useState("")
    const openMenu = Boolean(anchorEl)
    const [uploading, setUploading] = useState(false)
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [profilePic, setProfilePic] = useState([])
    let history = useHistory();
    const openDrawer = () => {
        setOpen(true)
    }
    let user = null
    if(props.isLoggedIn){
        user = JSON.parse(localStorage.getItem('user'))
        
    }
    const closeCollectSuccess = () => {
        setCollectSuccess(false)
    }
    
    const closeCollectError = () => {
        setCollectError(false)
    }
    const closeDrawer = () => {
        setOpen(false)
    }
    const handleCollectedSelection = (e) => {
        setSelectedCollection(e.target.value)
        console.log(selectedCollection)
    }
    const openLogin = () => {
        setLoginOpen(true)
    }
    const closeLogin = () => {
        setLoginOpen(false)
    }
    const handleRegisterClose = () =>{
        setRegisterOpen(false)
    }
    const handleRegisterOpen = () => {
        setRegisterOpen(true)
    }
    const closeSuccess = () => {
        setSuccess(false)
    }
    const closeError = () => {
        setLoginError(false)
    }
    const openUpload = () => {
        setUpload(true)
    }
    const closeUpload = () => {
        setUpload(false)
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    const resetSearch = () =>{
        history.push("/")
    }
    const drop = (acceptedFiles) => {
        setFile(acceptedFiles[0])
        console.log(file)
    }
    // const openRegister = () => {
    //     setRegisterOpen(true)
    // }
    // const closeRegister = () => {
    //     setRegisterOpen(false)
    // }
    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
      }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
      }
    const handleCollectionChange = (e) => {
        setCollection(e.target.value)
    }
    const handleRegisterUsernameChange = (e) => {
        setRegisterUsername(e.target.value)
    }
    const handleRegisterPasswordChange  = (e) => {
        setRegisterPassword(e.target.value)
    }
    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value)
    }
    const handleFileChange = (e) => {
        setProfilePic(e.target.files[0])
    }
    const handleLogin = (e) => {
        e.preventDefault()
        props.onLogIn(username,password)
        .then(()=>{
            setSuccess(true)
            setLoginOpen(false)

        })
        .catch((error) => {
            setLoginError(true)
            console.log(error)
        })

    }
    const handleLogout = () => {
        props.onLogout()
        setAnchorEl(null)
    }
    const handleSearch = (e) => {
        props.onSearch(e.target.value)
        if (e.target.value === ""){
            window.location.reload()
        }
    }
    const handleUpload = () => {
        const formdata = new FormData()
        formdata.append("imageurl",file, file.name)
        formdata.append("user_id", user.user[0].id)
        formdata.append("collections_id", selectedCollection)
        setUploading(true)
        UserService.upld(formdata)
        .then(() => {
            setUpload(false)
            setUploading(false)
        })
        .catch((err) =>{
            console.log(err)
            setCollectError(true)
        })
    }
    const handleRegister = () => {
        const formdata = new FormData()
        formdata.append("username", registerUsername)
        formdata.append("password", registerPassword)
        formdata.append("email", registerEmail)
        formdata.append("profilepic", profilePic, profilePic.name)
        UserService.register(formdata)
        .then(res => {
            setRegisterOpen(false)
        })
        .catch((err) => {
            console.log(err)
            setCollectError(true)
        })
    }
    const submitCollection = () => {
        UserService.newCollection(collection)
        .then(() => {
            setNewCollection(false)
            setCollectSuccess(true)
        })
        .catch((err) => {
            setCollectError(true)
            console.log(err)
        })
    }
    const handleCollectionOpen = () => {
        setNewCollection(true)
    }
    const handleCollectionClose = () => {
        setNewCollection(false)
    }
    useEffect(() => {
        UserService.getCollections()
        .then(res => {
            setCollections(res.data.collections)
        })
    },[])
    
    return(
        
        <AppBar position="fixed">
           <Toolbar>
               <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="open-drawer" onClick={openDrawer}>
                   <MenuIcon/>
               </IconButton>
               <Typography className={classes.title} variant="h6">
                   <a href="/" className={classes.titleLink}>
                    Imgfly
                    </a>
                   </Typography>
               <div className={classes.search}>
                   <div className={classes.searchIcon}>
                    <SearchIcon/>
                   </div>
                   <InputBase onChange={handleSearch} onClick={resetSearch} classes={{root: classes.inputRoot, input: classes.inputInput}} inputProps={{'aria-label': 'search'}}/>
                </div>
                <div className={classes.grow} />
                {props.isLoggedIn ? (
                    <>
                    <Tooltip title="Upload" arrow>
                    <Button variant="contained" onClick={openUpload} className={classes.uploadButton}>
                      <CloudUploadIcon/>
                  </Button>
                  </Tooltip>
                  
                  <IconButton aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} className={classes.accountButton} color="secondary">
                      <AccountCircle/>
                  </IconButton>
                  <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  open={openMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  onClose={handleMenuClose}>
                      <MenuItem>
                      <a href="/profile" className={classes.profileLink}>
                      Profile
                      </a>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
                  </Menu>
                  </>
                ):(
                <>
                <Button onClick={openLogin} color="secondary">Login</Button>
                <Button onClick={handleRegisterOpen} className={classes.loginButtons} color="secondary">Sign Up</Button>
                </>
                )}
               </Toolbar>
            <Drawer anchor="left" open={open} onClose={closeDrawer}>
            <List component="nav" 
            className={classes.drawer}
            subheader={
                <ListSubheader>
                    <h3 className={classes.subheader}>Collections</h3>
                </ListSubheader>
            }
            >
                {collections.map((c)=> {
                    return (
                        
                        <DrawerList title={c.title} id={c.id} collection={c} key={c.id} />
                        
                    )
                })}
                <ListItem button onClick={handleCollectionOpen}>
                    <ListItemIcon>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="New Collection"/>
                </ListItem>
            </List>
            </Drawer>
            <Dialog open={loginOpen} onClose={closeLogin}>
            <DialogContent className={classes.loginContent}>
                <TextField className={classes.loginFields} onChange={handleUsernameChange} autoFocus label="Username" />
                <TextField className={classes.loginFields} onChange={handlePasswordChange} autoFocus label="Password" type="password"/>
            </DialogContent>
            <DialogActions>
                <Button color="primary">Forgot Password?</Button>
                <Button onClick={handleLogin} color="primary">Login</Button>
            </DialogActions>
            </Dialog>
            <Snackbar open={success} autoHideDuration={6000} onClose={closeSuccess}>
                <Alert onClose={closeSuccess} severity="success">
                    Successfully Logged In!
                </Alert>
            </Snackbar>
            <Snackbar open={loginError} autoHideDuration={6000} onClose={closeError}>
                <Alert onClose={closeError} severity="error">
                    Invalid Login
                </Alert>
            </Snackbar>
            <Snackbar open={collectsuccess} autoHideDuration={6000} onClose={closeCollectSuccess}>
                <Alert onClose={closeCollectSuccess} severity="success">
                    New Collection Created!
                </Alert>
            </Snackbar>
            <Snackbar open={collecterror} onClose={closeCollectError}>
                <Alert onClose={closeCollectError} severity="error">
                    Error Occured
                </Alert>
            </Snackbar>
            <Dialog open={upload} onClose={closeUpload} className={classes.uploadDialog}>
                {uploading ? (
                    <CircularProgress className={classes.uploadSpinner}/>
                ):(
                    <>
                <DialogContent>
        
                <Dropzone onDrop={drop}>
                
  {({getRootProps, getInputProps}) => (
    <div className={classes.dropspace}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? (
<p>{file.name}</p>
        ):(
<p>Drop Img or Click to Select</p>
        )}
      </div>
    </div>
  )}
</Dropzone>
<div>
<FormControl className={classes.collectionSelect}>
<InputLabel id="collect-select">Collections</InputLabel>
<Select
value={selectedCollection}
onChange={handleCollectedSelection}
labelId="collect-select"

>
    {collections.map((c) => {
        return (
        <MenuItem value={c.id}>{c.title}</MenuItem>
        )
    })}
</Select>
</FormControl>
</div>
                </DialogContent>
                <DialogActions>
                <Button color="primary" onClick={closeUpload}>Cancel</Button>
                    <Button color="primary" onClick={handleUpload}>Upload</Button>
                </DialogActions>
                </>
                )}
            </Dialog>
            <Dialog open={newCollection} onClose={handleCollectionClose}>
            <DialogTitle>New Collection</DialogTitle>
            <DialogContent>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="name"
            fullWidth
            onChange={handleCollectionChange}
          />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCollectionClose} color="primary">Cancel</Button>
            <Button onClick={submitCollection} color="primary">Submit</Button>
            </DialogActions>
            </Dialog>
            <Dialog open={registerOpen} onClose={handleRegisterClose}>
                <DialogContent>
                    <FormControl>
                <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Username"
        onChange={handleRegisterUsernameChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Password"
        type="password"
        onChange={handleRegisterPasswordChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyIcon/>
            </InputAdornment>
          ),
        }}
      />
       <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
        onChange={handleRegisterEmailChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Picture"
        type="file"
        onChange={handleFileChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FileCopyIcon/>
            </InputAdornment>
          ),
        }}
      />

      </FormControl>
                </DialogContent>
                <DialogActions>
            <Button onClick={handleRegisterClose} color="primary">Cancel</Button>
            <Button onClick={handleRegister} color="primary">Submit</Button>
            </DialogActions>
            </Dialog>
        </AppBar>
       
    )
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      message: state.message
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
      onLogIn: (username,password) => dispatch(login(username,password)),
      onSearch: (tag) => dispatch(getTags(tag)),
      onAllImgs: () => dispatch(getAllImgs()),
      onLogout: () => dispatch(logout()),

    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Nav)