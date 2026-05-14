/**
 * Generated Tool: databasesTool_0664
 * Domain: Databases
 * ID: 0664
 */
exports.databasesTool_0664 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0664:', error);
    throw error;
  }
};
