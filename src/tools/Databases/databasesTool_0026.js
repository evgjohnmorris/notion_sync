/**
 * Generated Tool: databasesTool_0026
 * Domain: Databases
 * ID: 0026
 */
exports.databasesTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0026:', error);
    throw error;
  }
};
