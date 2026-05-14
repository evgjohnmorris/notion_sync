/**
 * Generated Tool: databasesTool_0658
 * Domain: Databases
 * ID: 0658
 */
exports.databasesTool_0658 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0658:', error);
    throw error;
  }
};
