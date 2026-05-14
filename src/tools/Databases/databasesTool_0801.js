/**
 * Generated Tool: databasesTool_0801
 * Domain: Databases
 * ID: 0801
 */
exports.databasesTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0801:', error);
    throw error;
  }
};
