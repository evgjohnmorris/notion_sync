/**
 * Generated Tool: databasesTool_0820
 * Domain: Databases
 * ID: 0820
 */
exports.databasesTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0820:', error);
    throw error;
  }
};
