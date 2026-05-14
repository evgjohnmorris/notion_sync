/**
 * Generated Tool: databasesTool_0624
 * Domain: Databases
 * ID: 0624
 */
exports.databasesTool_0624 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0624:', error);
    throw error;
  }
};
