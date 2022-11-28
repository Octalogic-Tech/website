export const NODE_ENV: string = process.env.NODE_ENV;
export const ENVIRONMENT: string = process.env.NEXT_PUBLIC_ENVIRONMENT as string;

export const host = process.env.NEXT_PUBLIC_HOST;
export const isLive: boolean = ENVIRONMENT === "production";
export const isStaging: boolean = ENVIRONMENT === "development";
export const isAnalyticsEnabled: boolean = NODE_ENV === "production" && isLive;
export const slackWebhookUrl: string = process.env.NEXT_SLACK_WEBHOOK_URL as string;
export const turnstileEndpoint: string = process.env.NEXT_PUBLIC_TURNSTILE_ENDPOINT as string;
export const turnstileSiteKey: string = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string;
export const turnstileSecretKey: string = process.env.NEXT_TURNSTILE_SECRET_KEY as string;
// export const gmail: string = process.env.NEXT_GMAIL as string;
// export const gmailClientId: string = process.env.NEXT_GMAIL_CLIENT_ID as string;
// export const gmailClientSecret: string = process.env.NEXT_GMAIL_CLIENT_SECRET as string;
// export const gmailRefreshToken: string = process.env.NEXT_GMAIL_REFRESH_TOKEN as string;
export const gmailCredentials: string = process.env.NEXT_GMAIL_CREDENTIALS as string;
