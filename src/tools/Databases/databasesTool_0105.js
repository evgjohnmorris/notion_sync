/**
 * Generated Tool: databasesTool_0105
 * Domain: Databases
 * ID: 0105
 */
exports.databasesTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0105:', error);
    throw error;
  }
};
