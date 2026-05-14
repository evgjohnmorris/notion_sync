/**
 * Generated Tool: databasesTool_0794
 * Domain: Databases
 * ID: 0794
 */
exports.databasesTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0794:', error);
    throw error;
  }
};
