/**
 * Generated Tool: databasesTool_0879
 * Domain: Databases
 * ID: 0879
 */
exports.databasesTool_0879 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0879:', error);
    throw error;
  }
};
