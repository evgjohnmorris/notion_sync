/**
 * Generated Tool: databasesTool_0921
 * Domain: Databases
 * ID: 0921
 */
exports.databasesTool_0921 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0921:', error);
    throw error;
  }
};
