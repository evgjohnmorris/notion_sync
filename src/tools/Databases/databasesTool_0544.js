/**
 * Generated Tool: databasesTool_0544
 * Domain: Databases
 * ID: 0544
 */
exports.databasesTool_0544 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0544:', error);
    throw error;
  }
};
