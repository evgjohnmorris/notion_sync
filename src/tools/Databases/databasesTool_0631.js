/**
 * Generated Tool: databasesTool_0631
 * Domain: Databases
 * ID: 0631
 */
exports.databasesTool_0631 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0631:', error);
    throw error;
  }
};
