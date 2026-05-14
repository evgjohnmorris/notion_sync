/**
 * Generated Tool: databasesTool_0322
 * Domain: Databases
 * ID: 0322
 */
exports.databasesTool_0322 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0322:', error);
    throw error;
  }
};
