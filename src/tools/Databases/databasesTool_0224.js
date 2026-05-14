/**
 * Generated Tool: databasesTool_0224
 * Domain: Databases
 * ID: 0224
 */
exports.databasesTool_0224 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0224:', error);
    throw error;
  }
};
