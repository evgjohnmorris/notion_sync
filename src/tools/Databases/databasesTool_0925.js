/**
 * Generated Tool: databasesTool_0925
 * Domain: Databases
 * ID: 0925
 */
exports.databasesTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0925:', error);
    throw error;
  }
};
