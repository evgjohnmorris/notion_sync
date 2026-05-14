/**
 * Generated Tool: databasesTool_0852
 * Domain: Databases
 * ID: 0852
 */
exports.databasesTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0852:', error);
    throw error;
  }
};
