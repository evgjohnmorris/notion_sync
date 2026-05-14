/**
 * Generated Tool: databasesTool_0971
 * Domain: Databases
 * ID: 0971
 */
exports.databasesTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0971:', error);
    throw error;
  }
};
