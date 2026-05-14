/**
 * Generated Tool: databasesTool_0220
 * Domain: Databases
 * ID: 0220
 */
exports.databasesTool_0220 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0220:', error);
    throw error;
  }
};
