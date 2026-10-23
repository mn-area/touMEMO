import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',        // PostgreSQLのユーザー名
    host: 'localhost',           // ホスト名
    database: 'toumemo',    // データベース名
    password: 'postgres',// パスワード
    port: 5432,                  // ポート番号（デフォルト: 5432）
});

export const checkDatabaseConnection = async (): Promise<boolean> => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        console.log('PostgreSQL 接続成功:', result.rows[0]);
        client.release();
        return true;
    } catch (error) {
        console.error('PostgreSQL 接続失敗:', error);
        return false;
    } finally {
        
    }
};

export default pool;
