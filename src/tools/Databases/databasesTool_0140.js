/**
 * Generated Tool: databasesTool_0140
 * Domain: Databases
 * ID: 0140
 */
exports.databasesTool_0140 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0140:', error);
    throw error;
  }
};
