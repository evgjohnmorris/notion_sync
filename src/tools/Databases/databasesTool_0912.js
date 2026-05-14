/**
 * Generated Tool: databasesTool_0912
 * Domain: Databases
 * ID: 0912
 */
exports.databasesTool_0912 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0912:', error);
    throw error;
  }
};
