/**
 * Generated Tool: databasesTool_0127
 * Domain: Databases
 * ID: 0127
 */
exports.databasesTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0127:', error);
    throw error;
  }
};
