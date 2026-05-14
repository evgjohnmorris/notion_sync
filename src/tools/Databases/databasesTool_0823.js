/**
 * Generated Tool: databasesTool_0823
 * Domain: Databases
 * ID: 0823
 */
exports.databasesTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0823:', error);
    throw error;
  }
};
