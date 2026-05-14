/**
 * Generated Tool: databasesTool_0410
 * Domain: Databases
 * ID: 0410
 */
exports.databasesTool_0410 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0410:', error);
    throw error;
  }
};
