/**
 * Generated Tool: databasesTool_0495
 * Domain: Databases
 * ID: 0495
 */
exports.databasesTool_0495 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0495:', error);
    throw error;
  }
};
