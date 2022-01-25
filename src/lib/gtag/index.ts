export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const isProduction = process.env.NODE_ENV === 'production';

// FYI: window.gtag can be reached because of @types/gtag.js package

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  if (isProduction) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

type GtagEvent = {
  action: string;
  params?: Record<string, unknown>;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, params }: GtagEvent): void => {
  if (isProduction) {
    window.gtag('event', action, params);
  }
};
