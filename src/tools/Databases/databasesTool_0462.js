/**
 * Generated Tool: databasesTool_0462
 * Domain: Databases
 * ID: 0462
 */
exports.databasesTool_0462 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0462:', error);
    throw error;
  }
};
