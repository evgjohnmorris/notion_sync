/**
 * Generated Tool: databasesTool_0050
 * Domain: Databases
 * ID: 0050
 */
exports.databasesTool_0050 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0050:', error);
    throw error;
  }
};
