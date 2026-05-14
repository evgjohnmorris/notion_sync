/**
 * Generated Tool: databasesTool_0485
 * Domain: Databases
 * ID: 0485
 */
exports.databasesTool_0485 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0485:', error);
    throw error;
  }
};
