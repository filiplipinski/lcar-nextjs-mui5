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
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link underline="hover" color="inherit" href="/">
        <HomeIcon sx={{ display: 'block' }} />
      </Link>

      {crumbs.map((crumb, index) => {
        if (crumb.name && index + 1 === crumbs.length) {
          return <Typography color="text.primary">{crumb.name}</Typography>;
        }

        if (crumb.href) {
          return (
            <Link key={crumb.name} underline="hover" color="inherit" href={crumb.href}>
              {crumb.name}
            </Link>
          );
        }

        return null;
      })}
    </MuiBreadcrumbs>
  );
};
