/**
 * Generated Tool: databasesTool_0885
 * Domain: Databases
 * ID: 0885
 */
exports.databasesTool_0885 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0885:', error);
    throw error;
  }
};
