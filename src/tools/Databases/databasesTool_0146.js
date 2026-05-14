/**
 * Generated Tool: databasesTool_0146
 * Domain: Databases
 * ID: 0146
 */
exports.databasesTool_0146 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0146:', error);
    throw error;
  }
};
