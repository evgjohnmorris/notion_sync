/**
 * Generated Tool: databasesTool_0301
 * Domain: Databases
 * ID: 0301
 */
exports.databasesTool_0301 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0301:', error);
    throw error;
  }
};
