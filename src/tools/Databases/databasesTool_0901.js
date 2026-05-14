/**
 * Generated Tool: databasesTool_0901
 * Domain: Databases
 * ID: 0901
 */
exports.databasesTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0901:', error);
    throw error;
  }
};
