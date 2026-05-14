/**
 * Generated Tool: databasesTool_0887
 * Domain: Databases
 * ID: 0887
 */
exports.databasesTool_0887 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0887:', error);
    throw error;
  }
};
