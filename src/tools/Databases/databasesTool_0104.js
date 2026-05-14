/**
 * Generated Tool: databasesTool_0104
 * Domain: Databases
 * ID: 0104
 */
exports.databasesTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0104:', error);
    throw error;
  }
};
