import cors from 'cors';

export default cors({
  exposedHeaders: ['Access-Control-Allow-Origin', 'Vary', 'Content-Length', 'Authorization'],
  credentials: true,
  origin: [
    `${process.env.FRONTEND_URL}`,
    'http://localhost:3000',
    'http://localhost:8002',
    'http://localhost:8003',
    // "https://mypage.com",
  ],
});
