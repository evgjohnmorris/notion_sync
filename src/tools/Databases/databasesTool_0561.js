/**
 * Generated Tool: databasesTool_0561
 * Domain: Databases
 * ID: 0561
 */
exports.databasesTool_0561 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0561:', error);
    throw error;
  }
};
