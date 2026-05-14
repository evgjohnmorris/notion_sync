/**
 * Generated Tool: databasesTool_0547
 * Domain: Databases
 * ID: 0547
 */
exports.databasesTool_0547 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0547:', error);
    throw error;
  }
};
