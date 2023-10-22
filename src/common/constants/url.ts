import 'dotenv/config';

export const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:9000';
export const webSocketUrl = 'https://tune-town.netlify.app:9090';
