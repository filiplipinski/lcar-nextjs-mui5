import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Typography, SxProps } from '@mui/material';

import { EmbeddedAsset } from './EmbeddedAsset';
import { HyperLink } from './HyperLink';

type ContenfulTypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const fontSizeMap: Record<ContenfulTypographyVariants, number> = {
  h1: 30,
  h2: 26,
  h3: 24,
  h4: 22,
  h5: 20,
  h6: 18,
  p: 16,
};

const typographyStyles = (variant: ContenfulTypographyVariants): SxProps => {
  return {
    fontSize: fontSizeMap[variant],
    whiteSpace: 'pre-line',
    textTransform: 'none',
  };
};

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: HyperLink,
    [INLINES.ASSET_HYPERLINK]: () => null,
    [INLINES.ENTRY_HYPERLINK]: () => null, // Ignore entry hyperlink
    [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
    [BLOCKS.PARAGRAPH]: (node, text) => <Typography sx={typographyStyles('p')}>{text}</Typography>,
    [BLOCKS.HEADING_1]: (node, text) => (
      <Typography variant="h1" sx={typographyStyles('h1')}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_2]: (node, text) => (
      <Typography variant="h2" sx={typographyStyles('h2')}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (node, text) => (
      <Typography variant="h3" sx={typographyStyles('h3')}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (node, text) => (
      <Typography variant="h4" sx={typographyStyles('h4')}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_5]: (node, text) => (
      <Typography variant="h5" sx={typographyStyles('h5')}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (node, text) => (
      <Typography variant="h6" sx={typographyStyles('h6')}>
        {text}
      </Typography>
    ),
  },
};

export const renderRichText = (rtd: Document | undefined) => {
  if (!rtd) {
    return null;
  }
  return documentToReactComponents(rtd, options);
};
