import {
  Box,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  Stack,
  Button,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const handleSubmitCallback: SubmitHandler<FormValues> = ({ name, email, phone, message }) => {};

  return (
    <Box
      sx={{
        backgroundColor: 'common.white',
        p: { xs: '32px 16px', sm: '32px' },
        mt: { xs: 4, md: 0 },
      }}
    >
      <Typography variant="h5" sx={{ textTransform: 'initial' }}>
        Skontaktuj się z nami!
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Formularz kontaktowy
      </Typography>

      <Stack component="form" spacing={0} onSubmit={handleSubmit(handleSubmitCallback)}>
        <FormControl fullWidth error={!!errors.name}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: 'To pole jest wymagane.',
              minLength: { value: 3, message: 'Musisz wpisać minimalnie 3 znaki.' },
              maxLength: { value: 100, message: 'Mozesz wpisać maksymalnie 100 znaków.' },
            }}
            render={({ field }) => {
              const { ref, ...restField } = field;
              return <TextField label="Imię" inputRef={ref} {...restField} />;
            }}
          />

          <FormHelperText>{errors.name?.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth error={!!errors.email}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'To pole jest wymagane.',
              maxLength: { value: 100, message: 'Mozesz wpisać maksymalnie 100 znaków.' },
            }}
            render={({ field }) => {
              const { ref, ...restField } = field;
              return <TextField label="E-mail" type="email" inputRef={ref} {...restField} />;
            }}
          />

          <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              maxLength: { value: 12, message: 'Mozesz wpisać maksymalnie 12 znaków.' },
            }}
            render={({ field }) => {
              const { ref, ...restField } = field;
              return (
                <TextField
                  label="Telefon (pole nie wymagane)"
                  type="phone"
                  inputRef={ref}
                  {...restField}
                />
              );
            }}
          />

          <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth error={!!errors.message}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: 'To pole jest wymagane.',
              maxLength: { value: 1000, message: 'Mozesz wpisać maksymalnie 1000 znaków.' },
              minLength: { value: 5, message: 'Musisz wpisać minimalnie 5 znaków.' },
            }}
            render={({ field }) => {
              const { ref, ...restField } = field;
              return (
                <TextField
                  label="Treść wiadomości..."
                  multiline
                  rows={3}
                  inputRef={ref}
                  {...restField}
                />
              );
            }}
          />

          <FormHelperText>{errors.message?.message}</FormHelperText>
        </FormControl>

        <Button
          color="secondary"
          type="submit"
          variant="contained"
          size="large"
          sx={{ alignSelf: 'center', width: 150 }}
        >
          Wyślij
        </Button>
      </Stack>
    </Box>
  );
};
