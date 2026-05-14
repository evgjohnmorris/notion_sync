/**
 * Generated Tool: databasesTool_0186
 * Domain: Databases
 * ID: 0186
 */
exports.databasesTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0186:', error);
    throw error;
  }
};
