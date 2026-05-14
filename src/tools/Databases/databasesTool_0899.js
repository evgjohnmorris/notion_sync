/**
 * Generated Tool: databasesTool_0899
 * Domain: Databases
 * ID: 0899
 */
exports.databasesTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0899:', error);
    throw error;
  }
};
