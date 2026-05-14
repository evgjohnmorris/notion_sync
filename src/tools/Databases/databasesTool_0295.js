/**
 * Generated Tool: databasesTool_0295
 * Domain: Databases
 * ID: 0295
 */
exports.databasesTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0295:', error);
    throw error;
  }
};
