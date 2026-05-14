/**
 * Generated Tool: databasesTool_0745
 * Domain: Databases
 * ID: 0745
 */
exports.databasesTool_0745 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0745:', error);
    throw error;
  }
};
