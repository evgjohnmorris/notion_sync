/**
 * Generated Tool: databasesTool_0904
 * Domain: Databases
 * ID: 0904
 */
exports.databasesTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0904:', error);
    throw error;
  }
};
