/**
 * Generated Tool: databasesTool_0711
 * Domain: Databases
 * ID: 0711
 */
exports.databasesTool_0711 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0711:', error);
    throw error;
  }
};
