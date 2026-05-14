/**
 * Generated Tool: databasesTool_0693
 * Domain: Databases
 * ID: 0693
 */
exports.databasesTool_0693 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0693:', error);
    throw error;
  }
};
