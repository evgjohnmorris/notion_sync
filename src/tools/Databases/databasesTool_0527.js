/**
 * Generated Tool: databasesTool_0527
 * Domain: Databases
 * ID: 0527
 */
exports.databasesTool_0527 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0527:', error);
    throw error;
  }
};
