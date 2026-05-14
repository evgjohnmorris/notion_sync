/**
 * Generated Tool: databasesTool_0030
 * Domain: Databases
 * ID: 0030
 */
exports.databasesTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0030:', error);
    throw error;
  }
};
