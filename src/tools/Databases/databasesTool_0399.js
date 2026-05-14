/**
 * Generated Tool: databasesTool_0399
 * Domain: Databases
 * ID: 0399
 */
exports.databasesTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0399:', error);
    throw error;
  }
};
