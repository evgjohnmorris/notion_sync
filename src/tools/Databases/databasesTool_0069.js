/**
 * Generated Tool: databasesTool_0069
 * Domain: Databases
 * ID: 0069
 */
exports.databasesTool_0069 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0069:', error);
    throw error;
  }
};
