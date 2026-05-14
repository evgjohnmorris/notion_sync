/**
 * Generated Tool: databasesTool_0804
 * Domain: Databases
 * ID: 0804
 */
exports.databasesTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0804:', error);
    throw error;
  }
};
