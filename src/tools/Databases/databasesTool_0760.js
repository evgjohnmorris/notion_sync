/**
 * Generated Tool: databasesTool_0760
 * Domain: Databases
 * ID: 0760
 */
exports.databasesTool_0760 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0760:', error);
    throw error;
  }
};
