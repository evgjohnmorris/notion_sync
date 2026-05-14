/**
 * Generated Tool: databasesTool_0251
 * Domain: Databases
 * ID: 0251
 */
exports.databasesTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0251:', error);
    throw error;
  }
};
