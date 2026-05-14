/**
 * Generated Tool: databasesTool_0228
 * Domain: Databases
 * ID: 0228
 */
exports.databasesTool_0228 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0228:', error);
    throw error;
  }
};
