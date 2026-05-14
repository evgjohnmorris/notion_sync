/**
 * Generated Tool: databasesTool_0627
 * Domain: Databases
 * ID: 0627
 */
exports.databasesTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0627:', error);
    throw error;
  }
};
