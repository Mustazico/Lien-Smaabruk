import { dbConnect } from '~/server/utils/dbConnect';

export default defineEventHandler(async () => {
  try {
    const db = await dbConnect();
    const [rows] = await db.query('SHOW TABLES');
    return {
      success: true,
      tables: rows,
    };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message,
    };
  }
});
