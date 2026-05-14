/**
 * Generated Tool: databasesTool_0421
 * Domain: Databases
 * ID: 0421
 */
exports.databasesTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0421:', error);
    throw error;
  }
};
