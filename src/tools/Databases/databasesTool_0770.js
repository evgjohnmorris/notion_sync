/**
 * Generated Tool: databasesTool_0770
 * Domain: Databases
 * ID: 0770
 */
exports.databasesTool_0770 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0770:', error);
    throw error;
  }
};
