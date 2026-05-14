/**
 * Generated Tool: databasesTool_0046
 * Domain: Databases
 * ID: 0046
 */
exports.databasesTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0046:', error);
    throw error;
  }
};
