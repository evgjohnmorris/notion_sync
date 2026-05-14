/**
 * Generated Tool: databasesTool_0666
 * Domain: Databases
 * ID: 0666
 */
exports.databasesTool_0666 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0666:', error);
    throw error;
  }
};
