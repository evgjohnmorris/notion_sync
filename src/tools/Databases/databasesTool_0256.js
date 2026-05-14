/**
 * Generated Tool: databasesTool_0256
 * Domain: Databases
 * ID: 0256
 */
exports.databasesTool_0256 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0256:', error);
    throw error;
  }
};
