/**
 * Generated Tool: databasesTool_0891
 * Domain: Databases
 * ID: 0891
 */
exports.databasesTool_0891 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0891:', error);
    throw error;
  }
};
