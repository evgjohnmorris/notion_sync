/**
 * Generated Tool: databasesTool_0645
 * Domain: Databases
 * ID: 0645
 */
exports.databasesTool_0645 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0645:', error);
    throw error;
  }
};
