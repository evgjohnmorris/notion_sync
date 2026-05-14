/**
 * Generated Tool: databasesTool_0003
 * Domain: Databases
 * ID: 0003
 */
exports.databasesTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0003:', error);
    throw error;
  }
};
