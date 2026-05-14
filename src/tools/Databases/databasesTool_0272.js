/**
 * Generated Tool: databasesTool_0272
 * Domain: Databases
 * ID: 0272
 */
exports.databasesTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0272:', error);
    throw error;
  }
};
