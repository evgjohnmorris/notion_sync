/**
 * Generated Tool: databasesTool_0936
 * Domain: Databases
 * ID: 0936
 */
exports.databasesTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0936:', error);
    throw error;
  }
};
