/**
 * Generated Tool: databasesTool_0523
 * Domain: Databases
 * ID: 0523
 */
exports.databasesTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0523:', error);
    throw error;
  }
};
