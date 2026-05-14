/**
 * Generated Tool: databasesTool_0669
 * Domain: Databases
 * ID: 0669
 */
exports.databasesTool_0669 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0669:', error);
    throw error;
  }
};
