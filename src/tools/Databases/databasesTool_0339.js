/**
 * Generated Tool: databasesTool_0339
 * Domain: Databases
 * ID: 0339
 */
exports.databasesTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0339:', error);
    throw error;
  }
};
