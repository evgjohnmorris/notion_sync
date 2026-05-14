/**
 * Generated Tool: databasesTool_0098
 * Domain: Databases
 * ID: 0098
 */
exports.databasesTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0098:', error);
    throw error;
  }
};
