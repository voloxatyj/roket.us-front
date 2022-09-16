import { useState } from 'react';
import { getStoryById } from '../services/api.services';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const NewsItem = ({
  id,
  title,
  likes,
  short_description,
  image,
  date,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [story, setStory] = useState({});

  const handleExpandClick = async () => {
    if (!expanded) {
      const [getStory] = await getStoryById(id);
      setStory(getStory.full_description);
    }
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='news-container'>
      <CardHeader title={title} subheader={date} />
      <CardMedia component='img' height='194' image={image} alt='Paella dish' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {short_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        {likes}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{story && story}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
