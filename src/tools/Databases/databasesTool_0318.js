/**
 * Generated Tool: databasesTool_0318
 * Domain: Databases
 * ID: 0318
 */
exports.databasesTool_0318 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0318:', error);
    throw error;
  }
};
