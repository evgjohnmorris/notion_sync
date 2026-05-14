/**
 * Generated Tool: databasesTool_0431
 * Domain: Databases
 * ID: 0431
 */
exports.databasesTool_0431 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0431:', error);
    throw error;
  }
};
