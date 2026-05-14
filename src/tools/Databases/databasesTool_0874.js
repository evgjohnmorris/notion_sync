/**
 * Generated Tool: databasesTool_0874
 * Domain: Databases
 * ID: 0874
 */
exports.databasesTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0874:', error);
    throw error;
  }
};
