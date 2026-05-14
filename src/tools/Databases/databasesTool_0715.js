/**
 * Generated Tool: databasesTool_0715
 * Domain: Databases
 * ID: 0715
 */
exports.databasesTool_0715 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0715:', error);
    throw error;
  }
};
