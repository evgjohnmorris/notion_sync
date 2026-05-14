/**
 * Generated Tool: databasesTool_0497
 * Domain: Databases
 * ID: 0497
 */
exports.databasesTool_0497 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0497:', error);
    throw error;
  }
};
