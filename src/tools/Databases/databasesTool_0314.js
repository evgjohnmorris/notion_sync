/**
 * Generated Tool: databasesTool_0314
 * Domain: Databases
 * ID: 0314
 */
exports.databasesTool_0314 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0314:', error);
    throw error;
  }
};
