import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

//Images
import cake1 from '../assets/images/cake1.jpg'
import cake2 from '../assets/images/download2.jpg'
import cake3 from '../assets/images/download3.jpg'
import cake4 from '../assets/images/download4.jpg'
import cake5 from '../assets/images/images5.jpg'
import cake6 from '../assets/images/download6.jpg'

const tileData = [
    {
        img: cake1,
        title: 'Cake 1',
        price: '$2',
        disc: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'

    },
    {
        img: cake2,
        title: 'Cake 2',
        price: '$2',
        disc: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'
    },
    {
        img: cake3,
        title: 'Cake 3',
        price: '$2',
        disc: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'
    },
    {
        img: cake4,
        title: 'Cake 3',
        price: '$2',
        disc: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'
    },
    {
        img: cake5,
        title: 'Cake 3',
        price: '$2',
        disc: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'
    },
    {
        img: cake6,
        title: 'Cake 3',
        price: '$2',
        disc: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.'
    },
]

// mount=() =>

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: 5
  },
  gridList: {
    width: 500,
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function Dashboard({navigation}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Best Selling Cakes</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile 
            key={tile.img}
            onClick={ ()=> navigation.navigate('Product',tile)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Price: {tile.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  {/* <InfoIcon /> */}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
 );
}