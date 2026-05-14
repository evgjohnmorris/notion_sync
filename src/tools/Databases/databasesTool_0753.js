/**
 * Generated Tool: databasesTool_0753
 * Domain: Databases
 * ID: 0753
 */
exports.databasesTool_0753 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0753:', error);
    throw error;
  }
};
