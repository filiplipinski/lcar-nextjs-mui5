declare namespace NodeJS {
  interface ProcessEnv {
    CF_SPACE_ID: string;
    CF_ACCESS_TOKEN: string;
  }
}


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }