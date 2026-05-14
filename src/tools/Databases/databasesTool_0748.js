/**
 * Generated Tool: databasesTool_0748
 * Domain: Databases
 * ID: 0748
 */
exports.databasesTool_0748 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0748:', error);
    throw error;
  }
};
