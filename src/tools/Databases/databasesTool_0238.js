/**
 * Generated Tool: databasesTool_0238
 * Domain: Databases
 * ID: 0238
 */
exports.databasesTool_0238 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0238:', error);
    throw error;
  }
};
