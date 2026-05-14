/**
 * Generated Tool: databasesTool_0738
 * Domain: Databases
 * ID: 0738
 */
exports.databasesTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0738:', error);
    throw error;
  }
};
