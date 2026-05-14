/**
 * Generated Tool: databasesTool_0117
 * Domain: Databases
 * ID: 0117
 */
exports.databasesTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0117:', error);
    throw error;
  }
};
