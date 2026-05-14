/**
 * Generated Tool: databasesTool_0982
 * Domain: Databases
 * ID: 0982
 */
exports.databasesTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0982:', error);
    throw error;
  }
};
