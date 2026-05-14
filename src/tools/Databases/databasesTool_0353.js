/**
 * Generated Tool: databasesTool_0353
 * Domain: Databases
 * ID: 0353
 */
exports.databasesTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0353:', error);
    throw error;
  }
};
