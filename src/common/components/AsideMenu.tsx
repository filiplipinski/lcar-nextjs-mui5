import { Typography, Box, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';

import { Link } from 'src/common/components/Link';
import { LazyImage } from './LazyImage';

export type AsideProps = {
  type: 'realizacje' | 'uslugi';
  data: { title: string; slug: string; imgSrc: string; description: string }[];
};

const labelMap = {
  realizacje: 'realizacje',
  uslugi: 'usługi',
} as const;

export const AsideMenu = ({ type, data }: AsideProps) => {
  const name = labelMap[type];

  return (
    <Box component="aside" sx={{ overflow: 'hidden' }}>
      <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
        Inne {name}
      </Typography>

      <Typography variant="caption" sx={{ display: 'block', mb: 2, mt: '-4px' }}>
        Zobacz nasze inne {name}
      </Typography>

      {data.map((item) => {
        return (
          <Link key={item.title} href={`/${type}/${item.slug}`} sx={{ display: 'block', mb: 3 }}>
            <Stack direction="row" alignItems="center">
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  minWidth: 80,
                  width: 80,
                  height: 50,
                  mr: 1.5,
                  backgroundColor: 'grey.600',
                }}
              >
                <LazyImage src={item.imgSrc} alt="" layout="fill" sizes="80px" objectFit="cover" />
              </Box>

              {/* Minus image width and image margin-right */}
              <Box sx={{ width: 'calc(100% - 75px - 12px)' }}>
                <EllipsisText variant="subtitle2">{item.title}</EllipsisText>
                <EllipsisText variant="caption">{item.description}</EllipsisText>
              </Box>
            </Stack>
          </Link>
        );
      })}

      {type === 'realizacje' && (
        <Link
          href="/wszystkie-realizacje"
          variant="subtitle2"
          color="grey.700"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          Zobacz więcej <ArrowForwardIosIcon fontSize="small" sx={{ ml: 0.5 }} />
        </Link>
      )}
    </Box>
  );
};

const EllipsisText = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
