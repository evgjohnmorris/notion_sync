/**
 * Generated Tool: databasesTool_0066
 * Domain: Databases
 * ID: 0066
 */
exports.databasesTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0066:', error);
    throw error;
  }
};
