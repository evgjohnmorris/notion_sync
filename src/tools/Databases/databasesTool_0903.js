/**
 * Generated Tool: databasesTool_0903
 * Domain: Databases
 * ID: 0903
 */
exports.databasesTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0903:', error);
    throw error;
  }
};
