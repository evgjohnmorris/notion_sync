/**
 * Generated Tool: databasesTool_0408
 * Domain: Databases
 * ID: 0408
 */
exports.databasesTool_0408 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0408:', error);
    throw error;
  }
};
