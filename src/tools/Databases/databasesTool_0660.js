/**
 * Generated Tool: databasesTool_0660
 * Domain: Databases
 * ID: 0660
 */
exports.databasesTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0660:', error);
    throw error;
  }
};
