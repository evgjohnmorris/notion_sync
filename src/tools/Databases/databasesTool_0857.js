/**
 * Generated Tool: databasesTool_0857
 * Domain: Databases
 * ID: 0857
 */
exports.databasesTool_0857 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0857:', error);
    throw error;
  }
};
