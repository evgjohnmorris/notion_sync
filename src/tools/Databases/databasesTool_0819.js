/**
 * Generated Tool: databasesTool_0819
 * Domain: Databases
 * ID: 0819
 */
exports.databasesTool_0819 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0819:', error);
    throw error;
  }
};
