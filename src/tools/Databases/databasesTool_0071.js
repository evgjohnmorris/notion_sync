/**
 * Generated Tool: databasesTool_0071
 * Domain: Databases
 * ID: 0071
 */
exports.databasesTool_0071 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0071:', error);
    throw error;
  }
};
