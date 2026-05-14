/**
 * Generated Tool: databasesTool_0254
 * Domain: Databases
 * ID: 0254
 */
exports.databasesTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0254:', error);
    throw error;
  }
};
