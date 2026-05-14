/**
 * Generated Tool: databasesTool_0793
 * Domain: Databases
 * ID: 0793
 */
exports.databasesTool_0793 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0793:', error);
    throw error;
  }
};
