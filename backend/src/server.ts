import express, { Request, Response } from "express";
import { selectTradeData } from './db';

const app = express();
const PORT = 3000;


// 接続確認用のAPIエンドポイント
app.get('/trades', async (req: Request, res: Response) => {
    try {
        const selectResault = await selectTradeData();
        res.status(200).json(selectResault);
    } catch (error) {
        res.status(500).json({
            // errorオブジェクトのメッセージを見たいときは以下を使用
            // errorStatus: error instanceof Error
            //     ? error.message
            //     : String(error),
            message: "サーバー内部でエラーが発生しました。",
        });
    }
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});