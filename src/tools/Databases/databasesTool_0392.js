/**
 * Generated Tool: databasesTool_0392
 * Domain: Databases
 * ID: 0392
 */
exports.databasesTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0392:', error);
    throw error;
  }
};
