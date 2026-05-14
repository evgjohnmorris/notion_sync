/**
 * Generated Tool: databasesTool_0229
 * Domain: Databases
 * ID: 0229
 */
exports.databasesTool_0229 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0229:', error);
    throw error;
  }
};
