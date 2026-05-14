/**
 * Generated Tool: databasesTool_0718
 * Domain: Databases
 * ID: 0718
 */
exports.databasesTool_0718 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0718:', error);
    throw error;
  }
};
