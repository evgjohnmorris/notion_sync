/**
 * Generated Tool: databasesTool_0128
 * Domain: Databases
 * ID: 0128
 */
exports.databasesTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0128:', error);
    throw error;
  }
};
