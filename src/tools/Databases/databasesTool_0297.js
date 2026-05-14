/**
 * Generated Tool: databasesTool_0297
 * Domain: Databases
 * ID: 0297
 */
exports.databasesTool_0297 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0297:', error);
    throw error;
  }
};
