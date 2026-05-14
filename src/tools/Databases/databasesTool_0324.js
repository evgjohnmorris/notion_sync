/**
 * Generated Tool: databasesTool_0324
 * Domain: Databases
 * ID: 0324
 */
exports.databasesTool_0324 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0324:', error);
    throw error;
  }
};
