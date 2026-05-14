/**
 * Generated Tool: databasesTool_0526
 * Domain: Databases
 * ID: 0526
 */
exports.databasesTool_0526 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0526:', error);
    throw error;
  }
};
