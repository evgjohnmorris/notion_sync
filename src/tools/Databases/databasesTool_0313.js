/**
 * Generated Tool: databasesTool_0313
 * Domain: Databases
 * ID: 0313
 */
exports.databasesTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0313:', error);
    throw error;
  }
};
