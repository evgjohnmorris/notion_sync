/**
 * Generated Tool: databasesTool_0041
 * Domain: Databases
 * ID: 0041
 */
exports.databasesTool_0041 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0041:', error);
    throw error;
  }
};
