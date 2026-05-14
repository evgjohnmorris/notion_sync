/**
 * Generated Tool: databasesTool_0070
 * Domain: Databases
 * ID: 0070
 */
exports.databasesTool_0070 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0070:', error);
    throw error;
  }
};
