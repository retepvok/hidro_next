/**
 * Utility function to get the base API URL from environment variables
 * @returns The base API URL
 */
export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
};
