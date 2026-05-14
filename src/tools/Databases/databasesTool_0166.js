/**
 * Generated Tool: databasesTool_0166
 * Domain: Databases
 * ID: 0166
 */
exports.databasesTool_0166 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0166:', error);
    throw error;
  }
};
