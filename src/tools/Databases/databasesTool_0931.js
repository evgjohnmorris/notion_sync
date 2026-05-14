/**
 * Generated Tool: databasesTool_0931
 * Domain: Databases
 * ID: 0931
 */
exports.databasesTool_0931 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0931:', error);
    throw error;
  }
};
