import { Typography, Button } from '@mui/material';
import { PageTemplate } from 'src/common/components/PageTemplate';
import { Link } from 'src/common/components/Link';

const NotFoundPage = () => {
  return (
    <PageTemplate title="Nie znaleziono">
      <Typography sx={{ mt: 2, mb: 1 }}>
        <strong>404</strong> | Strona nie została znaleziona :(
      </Typography>

      <Button
        LinkComponent={Link}
        href="/"
        variant="contained"
        size="small"
        color="secondary"
        sx={{ mt: 1 }}
      >
        Wróć do strony głównej
      </Button>
    </PageTemplate>
  );
};

export default NotFoundPage;
