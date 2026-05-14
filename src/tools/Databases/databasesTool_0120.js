/**
 * Generated Tool: databasesTool_0120
 * Domain: Databases
 * ID: 0120
 */
exports.databasesTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0120:', error);
    throw error;
  }
};
