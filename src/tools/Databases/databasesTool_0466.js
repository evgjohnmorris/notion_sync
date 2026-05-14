/**
 * Generated Tool: databasesTool_0466
 * Domain: Databases
 * ID: 0466
 */
exports.databasesTool_0466 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0466:', error);
    throw error;
  }
};
