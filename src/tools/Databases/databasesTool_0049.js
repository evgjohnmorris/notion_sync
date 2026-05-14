/**
 * Generated Tool: databasesTool_0049
 * Domain: Databases
 * ID: 0049
 */
exports.databasesTool_0049 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0049:', error);
    throw error;
  }
};
