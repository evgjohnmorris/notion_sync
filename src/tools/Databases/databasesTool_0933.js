/**
 * Generated Tool: databasesTool_0933
 * Domain: Databases
 * ID: 0933
 */
exports.databasesTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0933:', error);
    throw error;
  }
};
