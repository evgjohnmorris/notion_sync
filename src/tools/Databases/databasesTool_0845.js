/**
 * Generated Tool: databasesTool_0845
 * Domain: Databases
 * ID: 0845
 */
exports.databasesTool_0845 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0845:', error);
    throw error;
  }
};
