import express, { Request, Response } from "express";
import { selectTradeData } from './db';

const app = express();
const PORT = 3000;

// 接続確認用のAPIエンドポイント
app.get('/health/db', async (req: Request, res: Response) => {
    const isConnected = await selectTradeData();
    if (isConnected) {
        res.status(200).json({ status: 'connected', message: 'Database connection is healthy.' });
    } else {
        res.status(500).json({ status: 'error', message: 'Failed to connect to database.' });
    }
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // サーバー起動時にも接続確認を実行
    await selectTradeData();
});

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
//     console.log("yatta")
// });