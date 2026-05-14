/**
 * Generated Tool: databasesTool_0494
 * Domain: Databases
 * ID: 0494
 */
exports.databasesTool_0494 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0494:', error);
    throw error;
  }
};
