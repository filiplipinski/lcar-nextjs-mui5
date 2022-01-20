import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import { BLOCKS, NodeData } from '@contentful/rich-text-types';
import { blue } from '@mui/material/colors';

import { Link } from 'src/common/components/Link';
import { renderRichText } from './render';

type Props = {
  data: NodeData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any; // any, because lib types are incompatible
};

export const HyperLink: NodeRenderer = ({ data, content }: Props) => {
  const href = data.uri;

  console.log('content', content);
  const isExternal = typeof href === 'string' && (href.includes('http') || href.includes('www'));

  // Link text has to be rendered itself as rich text
  // to account for various formatting options (e.g. bold text)
  const linkText = renderRichText({
    content,
    data: {},
    nodeType: BLOCKS.DOCUMENT,
  });

  return (
    <Link
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      sx={{ color: blue['600'], ':hover': { textDecoration: 'underline !important' } }} // important because it also in theme.ts
    >
      {linkText}
    </Link>
  );
};
