/**
 * Generated Tool: databasesTool_0492
 * Domain: Databases
 * ID: 0492
 */
exports.databasesTool_0492 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0492:', error);
    throw error;
  }
};
