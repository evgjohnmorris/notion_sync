/**
 * Generated Tool: databasesTool_0425
 * Domain: Databases
 * ID: 0425
 */
exports.databasesTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0425:', error);
    throw error;
  }
};
