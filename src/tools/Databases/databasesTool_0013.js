/**
 * Generated Tool: databasesTool_0013
 * Domain: Databases
 * ID: 0013
 */
exports.databasesTool_0013 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0013:', error);
    throw error;
  }
};
