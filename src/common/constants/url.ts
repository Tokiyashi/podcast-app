import 'dotenv/config';

export const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:9000';
export const webSocketUrl =
  process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'http://localhost:9090';
