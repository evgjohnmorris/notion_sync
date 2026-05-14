/**
 * Generated Tool: databasesTool_0316
 * Domain: Databases
 * ID: 0316
 */
exports.databasesTool_0316 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0316:', error);
    throw error;
  }
};
