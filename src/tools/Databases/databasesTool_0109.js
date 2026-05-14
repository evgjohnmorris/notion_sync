/**
 * Generated Tool: databasesTool_0109
 * Domain: Databases
 * ID: 0109
 */
exports.databasesTool_0109 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0109:', error);
    throw error;
  }
};
