/**
 * Generated Tool: databasesTool_0898
 * Domain: Databases
 * ID: 0898
 */
exports.databasesTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0898:', error);
    throw error;
  }
};
