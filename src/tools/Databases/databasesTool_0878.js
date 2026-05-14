/**
 * Generated Tool: databasesTool_0878
 * Domain: Databases
 * ID: 0878
 */
exports.databasesTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0878:', error);
    throw error;
  }
};
