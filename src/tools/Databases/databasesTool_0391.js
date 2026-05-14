/**
 * Generated Tool: databasesTool_0391
 * Domain: Databases
 * ID: 0391
 */
exports.databasesTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0391:', error);
    throw error;
  }
};
