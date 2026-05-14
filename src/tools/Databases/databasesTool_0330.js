/**
 * Generated Tool: databasesTool_0330
 * Domain: Databases
 * ID: 0330
 */
exports.databasesTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0330:', error);
    throw error;
  }
};
