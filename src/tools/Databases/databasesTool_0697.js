/**
 * Generated Tool: databasesTool_0697
 * Domain: Databases
 * ID: 0697
 */
exports.databasesTool_0697 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0697:', error);
    throw error;
  }
};
