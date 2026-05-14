/**
 * Generated Tool: databasesTool_0137
 * Domain: Databases
 * ID: 0137
 */
exports.databasesTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0137:', error);
    throw error;
  }
};
