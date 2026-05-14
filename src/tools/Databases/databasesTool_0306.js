/**
 * Generated Tool: databasesTool_0306
 * Domain: Databases
 * ID: 0306
 */
exports.databasesTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0306:', error);
    throw error;
  }
};
