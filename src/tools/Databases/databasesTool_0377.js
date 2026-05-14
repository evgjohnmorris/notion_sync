/**
 * Generated Tool: databasesTool_0377
 * Domain: Databases
 * ID: 0377
 */
exports.databasesTool_0377 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0377:', error);
    throw error;
  }
};
