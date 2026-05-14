/**
 * Generated Tool: databasesTool_0364
 * Domain: Databases
 * ID: 0364
 */
exports.databasesTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0364:', error);
    throw error;
  }
};
