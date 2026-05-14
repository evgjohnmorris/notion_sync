/**
 * Generated Tool: databasesTool_0656
 * Domain: Databases
 * ID: 0656
 */
exports.databasesTool_0656 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0656:', error);
    throw error;
  }
};
