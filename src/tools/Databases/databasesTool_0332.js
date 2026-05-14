/**
 * Generated Tool: databasesTool_0332
 * Domain: Databases
 * ID: 0332
 */
exports.databasesTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0332:', error);
    throw error;
  }
};
