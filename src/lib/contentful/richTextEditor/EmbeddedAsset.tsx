import Image from 'next/image';
import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import { NodeData } from '@contentful/rich-text-types';
import { buildUrl } from '../utils';

type Props = {
  data: NodeData;
};

export const EmbeddedAsset: NodeRenderer = ({ data }: Props) => {
  const {
    target: { fields },
  } = data;

  // TODO later: ogarnac video jezeli potrzebne
  //   const isVideo = fields.file.contentType.includes('video');
  //   if (isVideo) {
  //     return (
  //       <Video
  //         sys={sys}
  //         // Change fields format to what <Image /> expects
  //         fields={fields as any}
  //         toPlainObject={noop as any}
  //         update={noop as any}
  //       />
  //     );
  //   }

  const isImage = fields.file.contentType.includes('image');

  if (isImage) {
    const { title, file } = fields;

    const src = buildUrl(file.url);

    return <Image src={src} alt={title} width={300} height={200} />;
  }

  // Ignore all other asset types, e.g. PDFs, other docs etc.
  return null;
};