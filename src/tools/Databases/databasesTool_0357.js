/**
 * Generated Tool: databasesTool_0357
 * Domain: Databases
 * ID: 0357
 */
exports.databasesTool_0357 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0357:', error);
    throw error;
  }
};
