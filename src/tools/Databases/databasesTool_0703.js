/**
 * Generated Tool: databasesTool_0703
 * Domain: Databases
 * ID: 0703
 */
exports.databasesTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0703:', error);
    throw error;
  }
};
