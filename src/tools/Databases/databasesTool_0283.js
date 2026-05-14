/**
 * Generated Tool: databasesTool_0283
 * Domain: Databases
 * ID: 0283
 */
exports.databasesTool_0283 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0283:', error);
    throw error;
  }
};
