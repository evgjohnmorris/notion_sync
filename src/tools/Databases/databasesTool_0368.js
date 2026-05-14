/**
 * Generated Tool: databasesTool_0368
 * Domain: Databases
 * ID: 0368
 */
exports.databasesTool_0368 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0368:', error);
    throw error;
  }
};
