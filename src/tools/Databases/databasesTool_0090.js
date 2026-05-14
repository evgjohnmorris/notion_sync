/**
 * Generated Tool: databasesTool_0090
 * Domain: Databases
 * ID: 0090
 */
exports.databasesTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0090:', error);
    throw error;
  }
};
