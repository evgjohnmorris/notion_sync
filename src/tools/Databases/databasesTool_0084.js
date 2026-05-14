/**
 * Generated Tool: databasesTool_0084
 * Domain: Databases
 * ID: 0084
 */
exports.databasesTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0084:', error);
    throw error;
  }
};
