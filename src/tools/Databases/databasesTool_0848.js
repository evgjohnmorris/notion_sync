/**
 * Generated Tool: databasesTool_0848
 * Domain: Databases
 * ID: 0848
 */
exports.databasesTool_0848 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0848:', error);
    throw error;
  }
};
