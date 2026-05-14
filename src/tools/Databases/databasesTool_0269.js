/**
 * Generated Tool: databasesTool_0269
 * Domain: Databases
 * ID: 0269
 */
exports.databasesTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0269:', error);
    throw error;
  }
};
