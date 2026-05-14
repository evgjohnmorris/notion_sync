/**
 * Generated Tool: databasesTool_0284
 * Domain: Databases
 * ID: 0284
 */
exports.databasesTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0284:', error);
    throw error;
  }
};
