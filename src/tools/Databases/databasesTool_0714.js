/**
 * Generated Tool: databasesTool_0714
 * Domain: Databases
 * ID: 0714
 */
exports.databasesTool_0714 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0714:', error);
    throw error;
  }
};
