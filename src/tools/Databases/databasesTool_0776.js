/**
 * Generated Tool: databasesTool_0776
 * Domain: Databases
 * ID: 0776
 */
exports.databasesTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0776:', error);
    throw error;
  }
};
