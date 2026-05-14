/**
 * Generated Tool: databasesTool_0437
 * Domain: Databases
 * ID: 0437
 */
exports.databasesTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0437:', error);
    throw error;
  }
};
