/**
 * Generated Tool: databasesTool_0999
 * Domain: Databases
 * ID: 0999
 */
exports.databasesTool_0999 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0999:', error);
    throw error;
  }
};
