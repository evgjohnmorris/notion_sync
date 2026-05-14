/**
 * Generated Tool: databasesTool_0751
 * Domain: Databases
 * ID: 0751
 */
exports.databasesTool_0751 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0751:', error);
    throw error;
  }
};
