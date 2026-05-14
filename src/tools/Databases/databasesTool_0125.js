/**
 * Generated Tool: databasesTool_0125
 * Domain: Databases
 * ID: 0125
 */
exports.databasesTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0125:', error);
    throw error;
  }
};
