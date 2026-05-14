/**
 * Generated Tool: databasesTool_0153
 * Domain: Databases
 * ID: 0153
 */
exports.databasesTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0153:', error);
    throw error;
  }
};
