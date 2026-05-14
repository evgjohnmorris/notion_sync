/**
 * Generated Tool: databasesTool_0929
 * Domain: Databases
 * ID: 0929
 */
exports.databasesTool_0929 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0929:', error);
    throw error;
  }
};
