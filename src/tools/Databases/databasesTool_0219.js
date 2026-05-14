/**
 * Generated Tool: databasesTool_0219
 * Domain: Databases
 * ID: 0219
 */
exports.databasesTool_0219 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0219:', error);
    throw error;
  }
};
