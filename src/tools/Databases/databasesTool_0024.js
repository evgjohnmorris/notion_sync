/**
 * Generated Tool: databasesTool_0024
 * Domain: Databases
 * ID: 0024
 */
exports.databasesTool_0024 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0024:', error);
    throw error;
  }
};
