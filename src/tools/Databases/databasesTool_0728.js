/**
 * Generated Tool: databasesTool_0728
 * Domain: Databases
 * ID: 0728
 */
exports.databasesTool_0728 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0728:', error);
    throw error;
  }
};
