/**
 * Generated Tool: databasesTool_0458
 * Domain: Databases
 * ID: 0458
 */
exports.databasesTool_0458 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0458:', error);
    throw error;
  }
};
