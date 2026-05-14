/**
 * Generated Tool: databasesTool_0799
 * Domain: Databases
 * ID: 0799
 */
exports.databasesTool_0799 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0799:', error);
    throw error;
  }
};
