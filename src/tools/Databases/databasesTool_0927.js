/**
 * Generated Tool: databasesTool_0927
 * Domain: Databases
 * ID: 0927
 */
exports.databasesTool_0927 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0927:', error);
    throw error;
  }
};
