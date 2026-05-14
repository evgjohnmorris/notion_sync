/**
 * Generated Tool: databasesTool_0946
 * Domain: Databases
 * ID: 0946
 */
exports.databasesTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0946:', error);
    throw error;
  }
};
