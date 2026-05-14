/**
 * Generated Tool: databasesTool_0198
 * Domain: Databases
 * ID: 0198
 */
exports.databasesTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0198:', error);
    throw error;
  }
};
