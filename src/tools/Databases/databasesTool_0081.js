/**
 * Generated Tool: databasesTool_0081
 * Domain: Databases
 * ID: 0081
 */
exports.databasesTool_0081 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0081:', error);
    throw error;
  }
};
