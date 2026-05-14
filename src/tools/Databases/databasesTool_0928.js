/**
 * Generated Tool: databasesTool_0928
 * Domain: Databases
 * ID: 0928
 */
exports.databasesTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0928:', error);
    throw error;
  }
};
