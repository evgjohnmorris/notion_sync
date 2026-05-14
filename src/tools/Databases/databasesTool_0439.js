/**
 * Generated Tool: databasesTool_0439
 * Domain: Databases
 * ID: 0439
 */
exports.databasesTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0439:', error);
    throw error;
  }
};
