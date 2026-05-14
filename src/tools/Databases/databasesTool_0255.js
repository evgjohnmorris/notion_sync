/**
 * Generated Tool: databasesTool_0255
 * Domain: Databases
 * ID: 0255
 */
exports.databasesTool_0255 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0255:', error);
    throw error;
  }
};
