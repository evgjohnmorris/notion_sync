/**
 * Generated Tool: databasesTool_0213
 * Domain: Databases
 * ID: 0213
 */
exports.databasesTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0213:', error);
    throw error;
  }
};
