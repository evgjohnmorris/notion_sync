/**
 * Generated Tool: databasesTool_0133
 * Domain: Databases
 * ID: 0133
 */
exports.databasesTool_0133 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0133:', error);
    throw error;
  }
};
