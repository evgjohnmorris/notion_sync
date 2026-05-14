/**
 * Generated Tool: databasesTool_0673
 * Domain: Databases
 * ID: 0673
 */
exports.databasesTool_0673 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0673:', error);
    throw error;
  }
};
