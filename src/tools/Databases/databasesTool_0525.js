/**
 * Generated Tool: databasesTool_0525
 * Domain: Databases
 * ID: 0525
 */
exports.databasesTool_0525 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0525:', error);
    throw error;
  }
};
