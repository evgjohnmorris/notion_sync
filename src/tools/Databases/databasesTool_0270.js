/**
 * Generated Tool: databasesTool_0270
 * Domain: Databases
 * ID: 0270
 */
exports.databasesTool_0270 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0270:', error);
    throw error;
  }
};
