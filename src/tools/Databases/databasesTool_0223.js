/**
 * Generated Tool: databasesTool_0223
 * Domain: Databases
 * ID: 0223
 */
exports.databasesTool_0223 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0223:', error);
    throw error;
  }
};
