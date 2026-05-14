/**
 * Generated Tool: databasesTool_0501
 * Domain: Databases
 * ID: 0501
 */
exports.databasesTool_0501 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0501:', error);
    throw error;
  }
};
