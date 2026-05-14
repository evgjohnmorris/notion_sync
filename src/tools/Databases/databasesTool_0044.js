/**
 * Generated Tool: databasesTool_0044
 * Domain: Databases
 * ID: 0044
 */
exports.databasesTool_0044 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0044:', error);
    throw error;
  }
};
