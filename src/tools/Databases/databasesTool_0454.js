/**
 * Generated Tool: databasesTool_0454
 * Domain: Databases
 * ID: 0454
 */
exports.databasesTool_0454 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0454:', error);
    throw error;
  }
};
