/**
 * Generated Tool: databasesTool_0941
 * Domain: Databases
 * ID: 0941
 */
exports.databasesTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0941:', error);
    throw error;
  }
};
