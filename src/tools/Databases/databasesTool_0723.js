/**
 * Generated Tool: databasesTool_0723
 * Domain: Databases
 * ID: 0723
 */
exports.databasesTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0723:', error);
    throw error;
  }
};
