/**
 * Generated Tool: databasesTool_0892
 * Domain: Databases
 * ID: 0892
 */
exports.databasesTool_0892 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0892:', error);
    throw error;
  }
};
