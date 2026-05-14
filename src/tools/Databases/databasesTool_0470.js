/**
 * Generated Tool: databasesTool_0470
 * Domain: Databases
 * ID: 0470
 */
exports.databasesTool_0470 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0470:', error);
    throw error;
  }
};
