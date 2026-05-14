/**
 * Generated Tool: databasesTool_0173
 * Domain: Databases
 * ID: 0173
 */
exports.databasesTool_0173 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0173:', error);
    throw error;
  }
};
