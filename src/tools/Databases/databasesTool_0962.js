/**
 * Generated Tool: databasesTool_0962
 * Domain: Databases
 * ID: 0962
 */
exports.databasesTool_0962 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0962:', error);
    throw error;
  }
};
