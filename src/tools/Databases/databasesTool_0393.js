/**
 * Generated Tool: databasesTool_0393
 * Domain: Databases
 * ID: 0393
 */
exports.databasesTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0393:', error);
    throw error;
  }
};
