import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { View } from 'react-native';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Ionicons } from '@expo/vector-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// class Product extends React(){
//     constructor(props) {
//         super(props);
//         this.state = {
//             comment:'',
//             comments: [] 
//         }
//     }
// }

export default function Product({ route, navigation }) {
  const [comment,setComment] = useState('');
  const [comments,addComment] = useState([]);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const renderComments = () =>{
      return comments.map(c=>{
        return (
        <Typography variant={"subtitle1"} key={c}>{c}</Typography>
        )
      });
  }
  const {title} = route.params;
  const {img} = route.params;
  const {price} = route.params;
  const {disc} = route.params;
  return (
    <View>
    
    <Card className={classes.root}>
      <CardHeader
        // avatar={
            //   <Avatar aria-label="recipe" className={classes.avatar}>
            //     R
            //   </Avatar>
            // }
            action={
                <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={title}
        subheader={'Price-'+ ''+ price}
        />
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
        />
      <CardContent>

        {/* Comment Section */}
        <div style={{padding: 5}}>
        <TextField
          id="outlined-full-width"
          label="Comment"
          style={{ margin: 8, width: '90%' }}
          placeholder="Add Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button 
            style={{marginLeft: 10}}
            variant="contained" 
            color="primary"
            onClick={()=> { 
                addComment(comments.concat(comment))
                console.log(comments)
             }}>
            Send
        </Button>   
        {
            comments.map((c,i) => {
                return (
                    <Paper elevation={3} key={i} style={{margin: 10, background: 'gainsboro'}}>
                        <Typography style={{padding: 5}} variant={"subtitle1"}>{c}</Typography>
                    </Paper>
                )
            })
        }
    </div>

        <Typography variant="body2" color="textSecondary" component="p">
          {disc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            // onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
    </View>
  );
}
