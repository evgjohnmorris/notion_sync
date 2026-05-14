/**
 * Generated Tool: databasesTool_0167
 * Domain: Databases
 * ID: 0167
 */
exports.databasesTool_0167 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0167:', error);
    throw error;
  }
};
