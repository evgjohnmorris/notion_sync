/**
 * Generated Tool: databasesTool_0789
 * Domain: Databases
 * ID: 0789
 */
exports.databasesTool_0789 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0789:', error);
    throw error;
  }
};
