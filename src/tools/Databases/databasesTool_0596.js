/**
 * Generated Tool: databasesTool_0596
 * Domain: Databases
 * ID: 0596
 */
exports.databasesTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0596:', error);
    throw error;
  }
};
