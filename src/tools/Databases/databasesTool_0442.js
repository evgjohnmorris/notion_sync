/**
 * Generated Tool: databasesTool_0442
 * Domain: Databases
 * ID: 0442
 */
exports.databasesTool_0442 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0442:', error);
    throw error;
  }
};
