/**
 * Generated Tool: databasesTool_0361
 * Domain: Databases
 * ID: 0361
 */
exports.databasesTool_0361 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0361:', error);
    throw error;
  }
};
