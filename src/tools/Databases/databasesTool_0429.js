/**
 * Generated Tool: databasesTool_0429
 * Domain: Databases
 * ID: 0429
 */
exports.databasesTool_0429 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0429:', error);
    throw error;
  }
};
