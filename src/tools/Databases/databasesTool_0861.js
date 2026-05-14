/**
 * Generated Tool: databasesTool_0861
 * Domain: Databases
 * ID: 0861
 */
exports.databasesTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0861:', error);
    throw error;
  }
};
