/**
 * Generated Tool: databasesTool_0259
 * Domain: Databases
 * ID: 0259
 */
exports.databasesTool_0259 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0259:', error);
    throw error;
  }
};
