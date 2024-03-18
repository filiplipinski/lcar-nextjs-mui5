import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { LazyImage } from 'src/common/components/LazyImage';

const correctPassword = process.env.NEXT_PUBLIC_SKODA_OFFER_PASSWORD;

type Props = {
  onPasswordConfirm: () => void;
};

export const EnterPagePassword = ({ onPasswordConfirm }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ password: string }>();

  return (
    <Modal open BackdropProps={{ sx: { background: 'background' } }} disableAutoFocus>
      <Box
        sx={{
          position: 'absolute',
          width: '80%',
          maxWidth: 500,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LazyImage
            src="/img/logo.png"
            alt=""
            width={180}
            height={50}
            objectFit="contain"
            unselectable="on"
          />{' '}
        </Box>

        <Typography variant="subtitle1" mt={3}>
          Podaj hasło do oferty:
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onPasswordConfirm)}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 1 }}
        >
          <FormControl>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                validate: (value) => {
                  if (value !== correctPassword) {
                    return 'Nieprawidłowe hasło.';
                  }
                },
              }}
              render={({ field }) => {
                const { ref, ...restField } = field;
                return <TextField label="Hasło" type="password" inputRef={ref} {...restField} />;
              }}
            />

            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ alignSelf: 'flex-end' }}
          >
            Potwierdź
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
