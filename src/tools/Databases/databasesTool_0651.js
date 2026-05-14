/**
 * Generated Tool: databasesTool_0651
 * Domain: Databases
 * ID: 0651
 */
exports.databasesTool_0651 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0651:', error);
    throw error;
  }
};
