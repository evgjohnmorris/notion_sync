/**
 * Generated Tool: databasesTool_0841
 * Domain: Databases
 * ID: 0841
 */
exports.databasesTool_0841 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0841:', error);
    throw error;
  }
};
