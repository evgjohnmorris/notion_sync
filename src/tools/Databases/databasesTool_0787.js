/**
 * Generated Tool: databasesTool_0787
 * Domain: Databases
 * ID: 0787
 */
exports.databasesTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0787:', error);
    throw error;
  }
};
