/**
 * Generated Tool: databasesTool_0292
 * Domain: Databases
 * ID: 0292
 */
exports.databasesTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0292:', error);
    throw error;
  }
};
