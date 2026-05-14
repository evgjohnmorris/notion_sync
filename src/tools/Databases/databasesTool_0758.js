/**
 * Generated Tool: databasesTool_0758
 * Domain: Databases
 * ID: 0758
 */
exports.databasesTool_0758 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0758:', error);
    throw error;
  }
};
