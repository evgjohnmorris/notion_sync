/**
 * Generated Tool: databasesTool_0040
 * Domain: Databases
 * ID: 0040
 */
exports.databasesTool_0040 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0040:', error);
    throw error;
  }
};
