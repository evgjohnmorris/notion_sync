/**
 * Generated Tool: databasesTool_0099
 * Domain: Databases
 * ID: 0099
 */
exports.databasesTool_0099 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0099:', error);
    throw error;
  }
};
