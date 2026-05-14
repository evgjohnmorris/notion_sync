/**
 * Generated Tool: databasesTool_0078
 * Domain: Databases
 * ID: 0078
 */
exports.databasesTool_0078 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0078:', error);
    throw error;
  }
};
