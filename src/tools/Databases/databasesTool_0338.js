/**
 * Generated Tool: databasesTool_0338
 * Domain: Databases
 * ID: 0338
 */
exports.databasesTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0338:', error);
    throw error;
  }
};
