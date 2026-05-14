/**
 * Generated Tool: databasesTool_0101
 * Domain: Databases
 * ID: 0101
 */
exports.databasesTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0101:', error);
    throw error;
  }
};
