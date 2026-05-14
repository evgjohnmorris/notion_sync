/**
 * Generated Tool: databasesTool_0512
 * Domain: Databases
 * ID: 0512
 */
exports.databasesTool_0512 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0512:', error);
    throw error;
  }
};
