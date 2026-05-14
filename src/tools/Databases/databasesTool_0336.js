/**
 * Generated Tool: databasesTool_0336
 * Domain: Databases
 * ID: 0336
 */
exports.databasesTool_0336 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0336:', error);
    throw error;
  }
};
