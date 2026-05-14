/**
 * Generated Tool: databasesTool_0655
 * Domain: Databases
 * ID: 0655
 */
exports.databasesTool_0655 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0655:', error);
    throw error;
  }
};
