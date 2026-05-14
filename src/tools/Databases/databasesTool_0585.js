/**
 * Generated Tool: databasesTool_0585
 * Domain: Databases
 * ID: 0585
 */
exports.databasesTool_0585 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0585:', error);
    throw error;
  }
};
