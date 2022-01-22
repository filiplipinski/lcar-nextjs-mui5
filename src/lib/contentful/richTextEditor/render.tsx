import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Typography, SxProps } from '@mui/material';

import { EmbeddedAsset } from './EmbeddedAsset';
import { HyperLink } from './HyperLink';

const typographyStyles: SxProps = {
  whiteSpace: 'pre-line',
};

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: HyperLink,
    [INLINES.ASSET_HYPERLINK]: () => null,
    [INLINES.ENTRY_HYPERLINK]: () => null, // Ignore entry hyperlink
    [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
    [BLOCKS.PARAGRAPH]: (node, text) => <Typography sx={typographyStyles}>{text}</Typography>,
    [BLOCKS.HEADING_1]: (node, text) => (
      <Typography variant="h1" sx={typographyStyles}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_2]: (node, text) => (
      <Typography variant="h2" sx={typographyStyles}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (node, text) => (
      <Typography variant="h3" sx={typographyStyles}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (node, text) => (
      <Typography variant="h4" sx={typographyStyles}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_5]: (node, text) => (
      <Typography variant="h5" sx={typographyStyles}>
        {text}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (node, text) => (
      <Typography variant="h6" sx={typographyStyles}>
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
