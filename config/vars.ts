export const NODE_ENV: string = process.env.NODE_ENV;
export const ENVIRONMENT: string = process.env.NEXT_PUBLIC_ENVIRONMENT as string;

export const host = process.env.NEXT_PUBLIC_HOST;
export const isLive: boolean = ENVIRONMENT === "production";
export const isStaging: boolean = ENVIRONMENT === "staging";
export const isAnalyticsEnabled: boolean = NODE_ENV === "production" && isLive;
