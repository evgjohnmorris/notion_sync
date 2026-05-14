/**
 * Generated Tool: databasesTool_0761
 * Domain: Databases
 * ID: 0761
 */
exports.databasesTool_0761 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0761:', error);
    throw error;
  }
};
