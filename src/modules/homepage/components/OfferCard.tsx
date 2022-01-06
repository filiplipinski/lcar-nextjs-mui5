import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import Image from 'next/image';

export type JobCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

export const OfferCard = ({ title, description, imgSrc }: JobCardProps) => {
  return (
    <Card
      key={title}
      sx={{
        maxWidth: { xs: 'auto', sm: 324, xl: 348 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea>
        <CardMedia sx={{ height: 200, width: '100%', position: 'relative' }}>
          <Image layout="fill" src={imgSrc} alt={title} objectFit="cover" />
        </CardMedia>

        <CardContent sx={{ pb: 0 }}>
          <Typography gutterBottom color="secondary" variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ marginTop: 'auto', justifyContent: 'flex-end' }}>
        <Button disableTouchRipple>Więcej</Button>
      </CardActions>
    </Card>
  );
};
