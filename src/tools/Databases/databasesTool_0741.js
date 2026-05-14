/**
 * Generated Tool: databasesTool_0741
 * Domain: Databases
 * ID: 0741
 */
exports.databasesTool_0741 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0741:', error);
    throw error;
  }
};
