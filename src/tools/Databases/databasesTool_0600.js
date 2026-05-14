/**
 * Generated Tool: databasesTool_0600
 * Domain: Databases
 * ID: 0600
 */
exports.databasesTool_0600 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0600:', error);
    throw error;
  }
};
