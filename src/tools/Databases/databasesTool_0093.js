/**
 * Generated Tool: databasesTool_0093
 * Domain: Databases
 * ID: 0093
 */
exports.databasesTool_0093 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0093:', error);
    throw error;
  }
};
