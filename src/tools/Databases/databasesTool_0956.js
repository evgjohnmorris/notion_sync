/**
 * Generated Tool: databasesTool_0956
 * Domain: Databases
 * ID: 0956
 */
exports.databasesTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0956:', error);
    throw error;
  }
};
