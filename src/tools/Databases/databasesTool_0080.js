/**
 * Generated Tool: databasesTool_0080
 * Domain: Databases
 * ID: 0080
 */
exports.databasesTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0080:', error);
    throw error;
  }
};
