import { Pool, QueryResult } from 'pg';

const pool = new Pool({
    user: 'postgres',        // PostgreSQLのユーザー名
    host: 'localhost',           // ホスト名
    database: 'toumemo',    // データベース名
    password: 'postgres',// パスワード
    port: 5432,                  // ポート番号（デフォルト: 5432）
});

type tradeData = {
    id: number;
    tradedate: Date;
    brandname: string;
    investmenttype: number;
    tradetype: number;
    unitprice: number;
    fee: number;
    quantity: number;
    reason: string;
    memo: string;
}

export const selectTradeData = async (): Promise<tradeData[]> => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM trade');

        return result.rows;
    } catch (error) {
        console.error('PostgreSQL 接続失敗:', error);
        throw error; 
    } finally {
        client.release();
    }
};

export default pool;
