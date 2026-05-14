/**
 * Generated Tool: databasesTool_0289
 * Domain: Databases
 * ID: 0289
 */
exports.databasesTool_0289 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0289:', error);
    throw error;
  }
};
