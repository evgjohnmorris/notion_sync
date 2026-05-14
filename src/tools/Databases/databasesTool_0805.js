/**
 * Generated Tool: databasesTool_0805
 * Domain: Databases
 * ID: 0805
 */
exports.databasesTool_0805 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0805:', error);
    throw error;
  }
};
