/**
 * Generated Tool: databasesTool_0134
 * Domain: Databases
 * ID: 0134
 */
exports.databasesTool_0134 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0134:', error);
    throw error;
  }
};
