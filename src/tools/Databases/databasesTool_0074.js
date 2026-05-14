/**
 * Generated Tool: databasesTool_0074
 * Domain: Databases
 * ID: 0074
 */
exports.databasesTool_0074 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0074:', error);
    throw error;
  }
};
