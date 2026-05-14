/**
 * Generated Tool: databasesTool_0973
 * Domain: Databases
 * ID: 0973
 */
exports.databasesTool_0973 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0973:', error);
    throw error;
  }
};
