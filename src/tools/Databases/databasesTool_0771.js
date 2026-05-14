/**
 * Generated Tool: databasesTool_0771
 * Domain: Databases
 * ID: 0771
 */
exports.databasesTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0771:', error);
    throw error;
  }
};
