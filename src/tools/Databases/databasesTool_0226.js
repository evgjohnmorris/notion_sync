/**
 * Generated Tool: databasesTool_0226
 * Domain: Databases
 * ID: 0226
 */
exports.databasesTool_0226 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0226:', error);
    throw error;
  }
};
