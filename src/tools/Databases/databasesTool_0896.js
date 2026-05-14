/**
 * Generated Tool: databasesTool_0896
 * Domain: Databases
 * ID: 0896
 */
exports.databasesTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0896:', error);
    throw error;
  }
};
