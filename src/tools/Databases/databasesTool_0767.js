/**
 * Generated Tool: databasesTool_0767
 * Domain: Databases
 * ID: 0767
 */
exports.databasesTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0767:', error);
    throw error;
  }
};
