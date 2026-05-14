/**
 * Generated Tool: databasesTool_0300
 * Domain: Databases
 * ID: 0300
 */
exports.databasesTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0300:', error);
    throw error;
  }
};
