/**
 * Generated Tool: databasesTool_0584
 * Domain: Databases
 * ID: 0584
 */
exports.databasesTool_0584 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0584:', error);
    throw error;
  }
};
