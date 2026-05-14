/**
 * Generated Tool: databasesTool_0281
 * Domain: Databases
 * ID: 0281
 */
exports.databasesTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0281:', error);
    throw error;
  }
};
