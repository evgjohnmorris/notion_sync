/**
 * Generated Tool: databasesTool_0991
 * Domain: Databases
 * ID: 0991
 */
exports.databasesTool_0991 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0991:', error);
    throw error;
  }
};
