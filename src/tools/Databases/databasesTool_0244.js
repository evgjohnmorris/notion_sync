/**
 * Generated Tool: databasesTool_0244
 * Domain: Databases
 * ID: 0244
 */
exports.databasesTool_0244 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0244:', error);
    throw error;
  }
};
