/**
 * Generated Tool: databasesTool_0740
 * Domain: Databases
 * ID: 0740
 */
exports.databasesTool_0740 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0740:', error);
    throw error;
  }
};
