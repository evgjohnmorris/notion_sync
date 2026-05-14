/**
 * Generated Tool: databasesTool_0302
 * Domain: Databases
 * ID: 0302
 */
exports.databasesTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0302:', error);
    throw error;
  }
};
