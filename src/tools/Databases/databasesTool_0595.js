/**
 * Generated Tool: databasesTool_0595
 * Domain: Databases
 * ID: 0595
 */
exports.databasesTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0595:', error);
    throw error;
  }
};
