/**
 * Generated Tool: databasesTool_0337
 * Domain: Databases
 * ID: 0337
 */
exports.databasesTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0337:', error);
    throw error;
  }
};
