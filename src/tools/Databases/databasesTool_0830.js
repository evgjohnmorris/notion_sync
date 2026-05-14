/**
 * Generated Tool: databasesTool_0830
 * Domain: Databases
 * ID: 0830
 */
exports.databasesTool_0830 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0830:', error);
    throw error;
  }
};
