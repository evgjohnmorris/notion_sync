/**
 * Generated Tool: databasesTool_0145
 * Domain: Databases
 * ID: 0145
 */
exports.databasesTool_0145 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0145:', error);
    throw error;
  }
};
