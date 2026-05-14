/**
 * Generated Tool: databasesTool_0172
 * Domain: Databases
 * ID: 0172
 */
exports.databasesTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0172:', error);
    throw error;
  }
};
