/**
 * Generated Tool: databasesTool_0218
 * Domain: Databases
 * ID: 0218
 */
exports.databasesTool_0218 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0218:', error);
    throw error;
  }
};
