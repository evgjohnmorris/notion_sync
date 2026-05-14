/**
 * Generated Tool: databasesTool_0558
 * Domain: Databases
 * ID: 0558
 */
exports.databasesTool_0558 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0558:', error);
    throw error;
  }
};
