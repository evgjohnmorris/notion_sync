/**
 * Generated Tool: databasesTool_0792
 * Domain: Databases
 * ID: 0792
 */
exports.databasesTool_0792 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0792:', error);
    throw error;
  }
};
