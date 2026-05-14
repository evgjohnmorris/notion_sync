/**
 * Generated Tool: databasesTool_0993
 * Domain: Databases
 * ID: 0993
 */
exports.databasesTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0993:', error);
    throw error;
  }
};
