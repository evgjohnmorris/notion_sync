/**
 * Generated Tool: databasesTool_0843
 * Domain: Databases
 * ID: 0843
 */
exports.databasesTool_0843 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0843:', error);
    throw error;
  }
};
