/**
 * Generated Tool: databasesTool_0465
 * Domain: Databases
 * ID: 0465
 */
exports.databasesTool_0465 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0465:', error);
    throw error;
  }
};
