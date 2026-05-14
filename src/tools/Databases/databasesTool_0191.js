/**
 * Generated Tool: databasesTool_0191
 * Domain: Databases
 * ID: 0191
 */
exports.databasesTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0191:', error);
    throw error;
  }
};
