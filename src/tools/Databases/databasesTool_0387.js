/**
 * Generated Tool: databasesTool_0387
 * Domain: Databases
 * ID: 0387
 */
exports.databasesTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0387:', error);
    throw error;
  }
};
