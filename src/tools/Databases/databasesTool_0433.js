/**
 * Generated Tool: databasesTool_0433
 * Domain: Databases
 * ID: 0433
 */
exports.databasesTool_0433 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0433:', error);
    throw error;
  }
};
