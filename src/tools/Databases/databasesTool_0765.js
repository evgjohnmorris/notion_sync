/**
 * Generated Tool: databasesTool_0765
 * Domain: Databases
 * ID: 0765
 */
exports.databasesTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0765:', error);
    throw error;
  }
};
