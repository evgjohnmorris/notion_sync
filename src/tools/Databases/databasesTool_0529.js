/**
 * Generated Tool: databasesTool_0529
 * Domain: Databases
 * ID: 0529
 */
exports.databasesTool_0529 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0529:', error);
    throw error;
  }
};
