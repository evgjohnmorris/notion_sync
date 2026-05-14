/**
 * Generated Tool: databasesTool_0583
 * Domain: Databases
 * ID: 0583
 */
exports.databasesTool_0583 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0583:', error);
    throw error;
  }
};
