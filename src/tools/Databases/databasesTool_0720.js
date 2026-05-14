/**
 * Generated Tool: databasesTool_0720
 * Domain: Databases
 * ID: 0720
 */
exports.databasesTool_0720 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0720:', error);
    throw error;
  }
};
