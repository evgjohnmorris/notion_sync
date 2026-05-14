/**
 * Generated Tool: databasesTool_0073
 * Domain: Databases
 * ID: 0073
 */
exports.databasesTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0073:', error);
    throw error;
  }
};
