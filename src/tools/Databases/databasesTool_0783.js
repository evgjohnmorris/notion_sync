/**
 * Generated Tool: databasesTool_0783
 * Domain: Databases
 * ID: 0783
 */
exports.databasesTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0783:', error);
    throw error;
  }
};
