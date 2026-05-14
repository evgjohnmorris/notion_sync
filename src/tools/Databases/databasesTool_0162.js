/**
 * Generated Tool: databasesTool_0162
 * Domain: Databases
 * ID: 0162
 */
exports.databasesTool_0162 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0162:', error);
    throw error;
  }
};
