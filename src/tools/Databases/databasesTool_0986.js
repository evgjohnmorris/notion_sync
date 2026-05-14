/**
 * Generated Tool: databasesTool_0986
 * Domain: Databases
 * ID: 0986
 */
exports.databasesTool_0986 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0986:', error);
    throw error;
  }
};
