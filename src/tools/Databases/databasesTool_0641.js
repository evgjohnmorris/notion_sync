/**
 * Generated Tool: databasesTool_0641
 * Domain: Databases
 * ID: 0641
 */
exports.databasesTool_0641 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0641:', error);
    throw error;
  }
};
