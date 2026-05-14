/**
 * Generated Tool: databasesTool_0031
 * Domain: Databases
 * ID: 0031
 */
exports.databasesTool_0031 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0031:', error);
    throw error;
  }
};
