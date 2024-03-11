import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

import { Link } from 'src/common/components/Link';

export type Crumbs = {
  name: string;
  href?: string; // optional, cause last crumb has no href
}[];

type Props = {
  crumbs: Crumbs;
};

export const Breadcrumbs = ({ crumbs }: Props) => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      sx={{ mb: 2 }}
    >
      <Link
        underline="hover"
        color="inherit"
        href="/"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        <HomeIcon sx={{ display: 'block' }} />
        <meta itemProp="name" content="home" />
        <meta itemProp="position" content="1" />
      </Link>

      {crumbs.map((crumb, index) => {
        if (crumb.href) {
          return (
            <div key={crumb.name}>
              <Link underline="hover" color="inherit" href={crumb.href} itemProp="name">
                {crumb.name}
              </Link>
              <meta itemProp="position" content={`${index + 2}`} />
            </div>
          );
        }

        return (
          <div key={crumb.name}>
            <Typography color="text.primary" itemProp="name">
              {crumb.name}
            </Typography>
            <meta itemProp="position" content={`${index + 2}`} />
          </div>
        );
      })}
    </MuiBreadcrumbs>
  );
};
