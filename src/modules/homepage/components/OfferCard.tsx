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
    <Card key={title} sx={{ maxWidth: { xs: 'auto', sm: 324, xl: 348 }, height: '100%' }}>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <CardMedia sx={{ height: 200, width: '100%', position: 'relative' }}>
          <Image layout="fill" src={imgSrc} alt={title} objectFit="cover" />
        </CardMedia>

        <CardContent sx={{ mb: 0, pb: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            gutterBottom
            color="secondary"
            variant="h5"
            component="h2"
            sx={{ textTransform: 'uppercase' }}
          >
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {description}
          </Typography>

          {/* mr:-1 to have the same spaces in X and Y */}
          <CardActions sx={{ marginTop: 'auto', alignSelf: 'flex-end', p: 0, pt: 1, mr: -1 }}>
            <Button component="a" disableTouchRipple sx={{ ml: 'auto' }}>
              Więcej
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
