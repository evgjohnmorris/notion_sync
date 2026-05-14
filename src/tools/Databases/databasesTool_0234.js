/**
 * Generated Tool: databasesTool_0234
 * Domain: Databases
 * ID: 0234
 */
exports.databasesTool_0234 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0234:', error);
    throw error;
  }
};
