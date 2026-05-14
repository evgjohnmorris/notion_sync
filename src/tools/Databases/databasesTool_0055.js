/**
 * Generated Tool: databasesTool_0055
 * Domain: Databases
 * ID: 0055
 */
exports.databasesTool_0055 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0055:', error);
    throw error;
  }
};
