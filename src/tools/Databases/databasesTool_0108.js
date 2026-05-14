/**
 * Generated Tool: databasesTool_0108
 * Domain: Databases
 * ID: 0108
 */
exports.databasesTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0108:', error);
    throw error;
  }
};
