/**
 * Generated Tool: databasesTool_0315
 * Domain: Databases
 * ID: 0315
 */
exports.databasesTool_0315 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0315:', error);
    throw error;
  }
};
