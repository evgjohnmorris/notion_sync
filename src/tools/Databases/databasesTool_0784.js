/**
 * Generated Tool: databasesTool_0784
 * Domain: Databases
 * ID: 0784
 */
exports.databasesTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0784:', error);
    throw error;
  }
};
