/**
 * Generated Tool: databasesTool_0482
 * Domain: Databases
 * ID: 0482
 */
exports.databasesTool_0482 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0482:', error);
    throw error;
  }
};
