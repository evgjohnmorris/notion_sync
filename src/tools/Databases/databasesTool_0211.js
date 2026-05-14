/**
 * Generated Tool: databasesTool_0211
 * Domain: Databases
 * ID: 0211
 */
exports.databasesTool_0211 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0211:', error);
    throw error;
  }
};
