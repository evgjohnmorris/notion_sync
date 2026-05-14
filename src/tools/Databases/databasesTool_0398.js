/**
 * Generated Tool: databasesTool_0398
 * Domain: Databases
 * ID: 0398
 */
exports.databasesTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0398:', error);
    throw error;
  }
};
