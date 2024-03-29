import {
  Typography,
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link } from 'src/common/components/Link';
import { truncate } from '../utils/string';
import { LazyImage } from './LazyImage';

export type CardProps = {
  slug: string;
  title: string;
  description: string;
  imgSrc: string;
  imgSizes: string;
  withRibbon?: boolean;
};

export const Card = ({ slug, title, description, imgSrc, imgSizes, withRibbon }: CardProps) => {
  const truncatedDescription = truncate(description, 130);

  return (
    <MuiCard key={slug} sx={{ height: '100%' }}>
      <CardActionArea
        component={Link}
        href={`/realizacje/${slug}`}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <CardMedia sx={{ height: 200, width: '100%', position: 'relative' }}>
          {imgSrc && (
            <LazyImage layout="fill" src={imgSrc} sizes={imgSizes} alt={title} objectFit="cover" />
          )}

          {withRibbon && (
            <Ribbon>
              <Typography
                color="common.white"
                align="center"
                sx={{ height: '100%', lineHeight: '40px', fontSize: 20, fontWeight: 'bold' }} // lineHeight = Ribbon height
              >
                NOWE
              </Typography>
            </Ribbon>
          )}
        </CardMedia>

        <CardContent
          sx={{
            mb: 0,
            pb: 1,
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            gutterBottom
            color="secondary"
            variant="h6"
            component="h3"
            sx={{ textTransform: 'uppercase' }}
          >
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {truncatedDescription}
          </Typography>

          {/* mr:-1 to have the same spaces in X and Y */}
          <CardActions sx={{ marginTop: 'auto', alignSelf: 'flex-end', p: 0, pt: 1, mr: -1 }}>
            <Button component="span" disableTouchRipple sx={{ ml: 'auto' }}>
              Więcej
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

const Ribbon = styled('div')({
  position: 'absolute',
  height: 40,
  width: 200,
  backgroundColor: '#ff0000d6',
  top: 20,
  right: -60,
  transform: 'rotate(45deg)',
});
