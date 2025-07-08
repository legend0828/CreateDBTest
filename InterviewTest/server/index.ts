import express from 'express';
import youtubeRouter from './routes/youtube';

const app = express();
const PORT = 3000;

// 設定 API 路由
app.use('/api', youtubeRouter);

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});