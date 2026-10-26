import express, { Request, Response } from "express";
import { selectTradeData } from './db';

const app = express();
const PORT = 3000;


// 接続確認用のAPIエンドポイント
app.get('/trades', async (req: Request, res: Response) => {
    const selectResault = await selectTradeData();
    res.status(200).json(selectResault);
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // サーバー起動時にも接続確認を実行
    await selectTradeData();
});