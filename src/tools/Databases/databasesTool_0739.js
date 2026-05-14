/**
 * Generated Tool: databasesTool_0739
 * Domain: Databases
 * ID: 0739
 */
exports.databasesTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0739:', error);
    throw error;
  }
};
