import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

import { Link } from 'src/common/components/Link';

export type BreadcrumbsProps = {
  type: 'realizations' | 'offers';
  lastCrumbName: string | undefined;
};

export const Breadcrumbs = ({ type, lastCrumbName }: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link underline="hover" color="inherit" href="/">
        <HomeIcon sx={{ display: 'block' }} />
      </Link>

      {type === 'realizations' && (
        <Link underline="hover" color="inherit" href="/wszystkie-realizacje">
          Realizacje
        </Link>
      )}

      {type === 'offers' && (
        <Link underline="hover" color="inherit" href="/#uslugi">
          Usługi
        </Link>
      )}

      {lastCrumbName && <Typography color="text.primary">{lastCrumbName}</Typography>}
    </MuiBreadcrumbs>
  );
};
