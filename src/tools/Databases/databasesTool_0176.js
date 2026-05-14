/**
 * Generated Tool: databasesTool_0176
 * Domain: Databases
 * ID: 0176
 */
exports.databasesTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0176:', error);
    throw error;
  }
};
