/**
 * Generated Tool: databasesTool_0249
 * Domain: Databases
 * ID: 0249
 */
exports.databasesTool_0249 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0249:', error);
    throw error;
  }
};
