/**
 * Generated Tool: databasesTool_0777
 * Domain: Databases
 * ID: 0777
 */
exports.databasesTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0777:', error);
    throw error;
  }
};
