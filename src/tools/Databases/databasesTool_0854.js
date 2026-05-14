/**
 * Generated Tool: databasesTool_0854
 * Domain: Databases
 * ID: 0854
 */
exports.databasesTool_0854 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0854:', error);
    throw error;
  }
};
