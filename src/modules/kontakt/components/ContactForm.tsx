import { useState, SyntheticEvent } from 'react';
import {
  Box,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  Stack,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import * as gtag from 'src/lib/gtag';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

export const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [isSuccessAlertOpen, setSuccessAlertOpen] = useState(false);
  const [isErrorAlertOpen, setErrorAlertOpen] = useState(false);

  const handleClose = (e?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessAlertOpen(false);
    setErrorAlertOpen(false);
  };

  const handleSubmitCallback: SubmitHandler<FormValues> = async ({
    name,
    email,
    phone,
    message,
  }) => {
    gtag.event({ action: 'send_email' });

    try {
      setSubmitLoading(true);
      const emailjsSend = (await import('@emailjs/browser')).send;

      const templateParams = {
        from_name: name,
        reply_to: email,
        phone,
        message,
      };

      await emailjsSend(serviceId, templateId, templateParams, userId);

      reset();
      setSuccessAlertOpen(true);
    } catch (err) {
      setErrorAlertOpen(true);
    } finally {
      setSubmitLoading(false);
    }
  };

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
      <Typography variant="body2" sx={{ mb: 3 }}>
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
          disabled={isSubmitLoading}
          color="secondary"
          type="submit"
          variant="contained"
          size="large"
          sx={{ alignSelf: 'center', width: 150 }}
        >
          Wyślij
          {isSubmitLoading && <CircularProgress size={20} sx={{ ml: '5px' }} />}
        </Button>
      </Stack>

      <Snackbar
        open={isSuccessAlertOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity="success" elevation={6} variant="filled" onClose={handleClose}>
          Wiadomość została wysłana! Odezwiemy się najszybciej jak możemy
        </Alert>
      </Snackbar>

      <Snackbar
        open={isErrorAlertOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity="error" elevation={6} variant="filled" onClose={handleClose}>
          Coś poszło nie tak :( Skontaktuj się z nami: +48 539 943 336
        </Alert>
      </Snackbar>
    </Box>
  );
};
