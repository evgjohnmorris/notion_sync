/**
 * Generated Tool: databasesTool_0370
 * Domain: Databases
 * ID: 0370
 */
exports.databasesTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0370:', error);
    throw error;
  }
};
