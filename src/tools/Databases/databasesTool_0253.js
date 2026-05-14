/**
 * Generated Tool: databasesTool_0253
 * Domain: Databases
 * ID: 0253
 */
exports.databasesTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0253:', error);
    throw error;
  }
};
