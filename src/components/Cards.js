import React from 'react'
import {Link} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import _2 from '../img/cards/_2.png'
import _1 from '../img/cards/_1.png'
import _3 from '../img/cards/_3.png'


const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '0px',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));


const Cards = () => {

  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  
return(
    <>
    <NoSsr>
    <GoogleFontLoader
      fonts={[
        { font: 'Spartan', weights: [300] },
        { font: 'Montserrat', weights: [200, 400, 700] },
      ]}
    />
  </NoSsr>
<Link to="/WiazankiGallery">
  <Card className={styles.card}>
    <CardMedia
      classes={mediaStyles}
      image={_2}
    />
    <Box py={3} px={2} className={styles.content}>
      <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>wiązanki i wieńce pogrzebowe</InfoTitle>
        <InfoCaption>Zielono Mi</InfoCaption>
      </Info>
    </Box>
    
  </Card>
  </Link>
  </>
  
)
}

export default Cards;