/**
 * Generated Tool: databasesTool_0919
 * Domain: Databases
 * ID: 0919
 */
exports.databasesTool_0919 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0919:', error);
    throw error;
  }
};
