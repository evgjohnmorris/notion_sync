/**
 * Generated Tool: databasesTool_0532
 * Domain: Databases
 * ID: 0532
 */
exports.databasesTool_0532 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0532:', error);
    throw error;
  }
};
