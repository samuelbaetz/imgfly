import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    linkLight: {
        color:'#212121',
        textDecoration: 'none'
    }
}))
const DrawerList = (props) => {
    const classes = useStyles()
    return (
        
            <Link
            className={classes.linkLight}
            to={{
               pathname: `/c/${props.title}`,
               state: props.collection 
            }}>
            <ListItem button key={props.id}>
                <ListItemText primary={props.title}></ListItemText>
            </ListItem>
            </Link>
        
    )
}

export default DrawerList