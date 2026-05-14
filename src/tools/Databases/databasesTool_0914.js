/**
 * Generated Tool: databasesTool_0914
 * Domain: Databases
 * ID: 0914
 */
exports.databasesTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0914:', error);
    throw error;
  }
};
