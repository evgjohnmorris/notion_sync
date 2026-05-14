/**
 * Generated Tool: databasesTool_0872
 * Domain: Databases
 * ID: 0872
 */
exports.databasesTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0872:', error);
    throw error;
  }
};
