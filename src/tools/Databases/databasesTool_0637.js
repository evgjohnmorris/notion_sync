/**
 * Generated Tool: databasesTool_0637
 * Domain: Databases
 * ID: 0637
 */
exports.databasesTool_0637 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0637:', error);
    throw error;
  }
};
